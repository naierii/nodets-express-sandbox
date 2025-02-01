export default class UrlShortener {
  urlList: { [key: string]: string } = {};
  shortenedUrlOrigin = "https://www.shortened.com";

  constructor() {}

  shorten(theUrl: string) {
    // Using Object.keys().length as simulation of unique IDs created by database
    // On an actual project, use the unique ID created by the database
    const shortenedUrl = new URL(
      `/${Object.keys(this.urlList).length}`,
      this.shortenedUrlOrigin
    );
    this.urlList[shortenedUrl.href] = theUrl;
    return shortenedUrl.href;
  }

  restore(shortenedUrl: string) {
    return this.urlList[shortenedUrl];
  }

  peek() {
    console.log(this.urlList);
    console.log("test");
  }
}
