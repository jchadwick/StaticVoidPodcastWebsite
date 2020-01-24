# Static Void Podcast website

This is the GitHub Pages repo that powers www.staticvoidpodcast.com.

Here's how we publish a show:

1. **Record the show!**  
  Plenty of options here, but ultimately we just need an `.mp3` file
2. **Upload the MP3** 
  I like to use [archive.org](https://archive.org) because it's totally free, but any host will do
3. **Add a new page to the `/_posts` folder**
  Be sure to include the show's metadata to add to the RSS feed for podcatchers to read.  Example:
  ```
  ---
  title: "Messaging in Distributed Systems - What&#x27;s the Deal?"
  date: "Wed, 14 Mar 2018 05:00:26 +0000"
  categories: 
    - "podcast"
  podcast_duration: "01:12:46"
  guid: "messaging-in-distributed-systems"
  podcast_file_size: "27585708"
  podcast_link: "http://archive.org/download/StaticVoidPodcast20180123MessagingPatterns/StaticVoidPodcast-20180123-MessagingPatterns.mp3"
  podcast_length: "27585708"
  ---
  ```
4. **Profit!**  I guess.  Somehow.  I dunno - I never got this one right.
