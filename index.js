var fs = require("fs");
var parseString = require("xml2js").parseString;
var YAML = require("json2yaml");
var moment = require('moment');
var TurndownService = require('turndown')
 
var turndownService = new TurndownService(); 
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
  podcast_duration: item["itunes:duration"][0],
  //podcast_file_size: 13.7 MB
  podcast_guid: relative(item.guid[0]._).substr(1),
  podcast_link: mediaLocation(item),
  podcast_length: item.enclosure[0].$.length,
  //image: /assets/posts/Awesome-Podcast-Art.jpg
  excerpt: item.description[0],
  content: item["content:encoded"][0]
});

const lineBreak = new RegExp('\r\n', 'g');

function convertFeed(feed) {
  const rawEpisodes = feed.rss.channel[0].item;
  const episodes = rawEpisodes.map(convertToEpisode).reverse();

  console.log(`Processing ${episodes.length} episodes...`);

  episodes.forEach(({content, ...episode}) => {
    const date = moment(episode.date).format("YYYY-MM-DD");
    const filename = `./_posts/${date}-${episode.podcast_guid}.md`;
    const markdown = turndownService.turndown(content.replace(lineBreak, '<br>'));
    const yaml = `${YAML.stringify(episode)}\r\n----\r\n${markdown}`;
    console.log(`Writing episode ${filename}...`);
    fs.writeFileSync(filename, yaml);
  });
}

const filename = "./feed.xml";
console.log(`Converting ${filename}...`);
const xml = fs.readFileSync(filename, "utf8");
parseString(xml, (err, feed) => convertFeed(feed));
