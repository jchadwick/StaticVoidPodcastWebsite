var fs = require("fs");
var parseString = require("xml2js").parseString;
var YAML = require("json2yaml");

const relative = url => url.substr(url.indexOf("/", 8));

const mediaLocation = item => {
  const url = item.enclosure[0].$.url;
  return "http://" + url.substr(url.indexOf("archive.org"));
};

const convertToEpisode = item => ({
  title: item.title[0],
  permalink: relative(item.link[0]),
  date: item.pubDate[0],
  categories: ["podcast"],
  podcast_duration: "01:26:02",
  //podcast_file_size: 13.7 MB
  podcast_guid: relative(item.guid[0]._).substr(1),
  podcast_link: mediaLocation(item),
  podcast_length: item.enclosure[0].$.length,
  //image: /assets/posts/Awesome-Podcast-Art.jpg
  excerpt: item.description[0],
  content: item["content:encoded"][0]
});

function convertFeed(feed) {
  const rawEpisodes = feed.rss.channel[0].item;
  const episodes = rawEpisodes.map(convertToEpisode).reverse();

  console.log(`Processing ${episodes.length} episodes...`);

  episodes.forEach((episode, index) => {
    const filename = `./episodes/${("00000" + index).slice(-4)}-${episode.podcast_guid}.yaml`;
    const yaml = YAML.stringify(episode);
    console.log(`Writing episode ${filename}...`);
    fs.writeFileSync(filename, yaml);
  });
}

function saveEpisode(episode) {}

const filename = "./feed.xml";
console.log(`Converting ${filename}...`);
const xml = fs.readFileSync(filename, "utf8");
parseString(xml, (err, feed) => convertFeed(feed));
