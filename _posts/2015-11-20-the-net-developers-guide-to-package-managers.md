---
  title: "The .NET Developer&#x27;s Guide to Package Managers"
  date: "Fri, 20 Nov 2015 12:00:18 +0000"
  categories: 
    - "podcast"
  podcast_duration: "00:52:17"
  guid: "the-net-developers-guide-to-package-managers"
  podcast_file_size: "31559948"
  podcast_link: "http://archive.org/download/StaticVoidPodcast20151115PackageManagement/StaticVoidPodcast-20151115-PackageManagement.mp3"
  podcast_length: "31559948"

---
NuGet burst onto the .NET developer scene in 2010 and took Visual Studio development by storm. We .NET developers were able to easily add key Microsoft dependencies like Entity Framework, ASP.NET Web API, or client-side libraries like jQuery and bootstrap. But now new package management is front and center in Visual Studio 2015. And there's nothing stopping you from using them in your development toolbelt today. Where does this leave NuGet? And what will you need to get up to speed on now? Chris, Todd, and Jess talk about what NuGet meant to developers until now, and introduce NPM and Bower and their integration into the ASP.NET 5 beta templates. By no means is it the whole list of package managers you can use, but they will be front and center for web developers who live in Visual Studio. Mentioned in the show:

*   [Introduction to TypeScript](https://www.youtube.com/watch?v=qRD7bkK7m10): Jess's free TypeScript training video
*   [Bower](http://bower.io/) \- Home page for this web development package manager
*   [npm](https://www.npmjs.com/) \- The nodejs package manager, which has also become a go to for more than just nodejs development.
*   [Visual Studio - Bower: Modern Tools for Web Development](https://msdn.microsoft.com/en-us/magazine/mt573714.aspx): Adam Tuliper dives into Bower usage in Visual Studio web projects.
*   [Manage client-side packages with Bower](http://docs.asp.net/en/latest/client-side/bower.html) \- Direct from the ASP.NET 5 documentation.
*   [Introducing Gulp, Grunt, Bower, and npm support for Visual Studio](http://www.hanselman.com/blog/IntroducingGulpGruntBowerAndNpmSupportForVisualStudio.aspx): Scott Hanselman makes the case for using more than just NuGet and introduces the Visual Studio integration for these tools (we didn't discuss task runners in this episode).
*   [Why use Bower when there is NPM?](https://www.quora.com/Why-use-Bower-when-there-is-npm) \- Mattias Petter Johansson makes the case that [Browserify](http://browserify.org/) and NPM are the way to go (we didn't discuss browserify but we did discuss whether Bower is really necessary).
    *   Mattias also has a fun [YouTube channel](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q) discussing how to become a better programmer.
*   [Migrating to Automatic Package Restore](http://docs.nuget.org/consume/package-restore/migrating-to-automatic-package-restore) \- Stop using "Enable Package Restore" in your Visual Studio solutions. The naming is subtle, but NuGet has a simpler package restore methodology, and you have to edit your project files to get rid of the "old" way.