import UrlShortener from "./urlShortener";

describe("URL Shortener", () => {
  let urlShortener: UrlShortener;
  beforeEach(() => {
    urlShortener = new UrlShortener();
  });

  // Path parameter is based on ID returned by the database. Mock
  // the DB response.
  it("Should shorten three items successfully", () => {
    const consoleSpy = jest.spyOn(console, "log");

    const url1 = urlShortener.shorten("https://facebook.com/hello/world");
    const url2 = urlShortener.shorten("https://facebook.com/hello/world/again");
    const url3 = urlShortener.shorten(
      "https://facebook.com/hello/world/last-time"
    );
    urlShortener.peek();

    expect(consoleSpy.mock.calls[0][0]).toStrictEqual({
      "https://www.shortened.com/0": "https://facebook.com/hello/world",
      "https://www.shortened.com/1": "https://facebook.com/hello/world/again",
      "https://www.shortened.com/2":
        "https://facebook.com/hello/world/last-time",
    });

    expect(url1).toEqual(`${urlShortener.shortenedUrlOrigin}/0`);
    expect(url2).toEqual(`${urlShortener.shortenedUrlOrigin}/1`);
    expect(url3).toEqual(`${urlShortener.shortenedUrlOrigin}/2`);
  });

  it("Should restore a URL item in a list of URLs", () => {
    const testingUrl = "https://facebook.com/hello/world/again";

    const url1 = urlShortener.shorten("https://facebook.com/hello/world");
    const url2 = urlShortener.shorten(testingUrl);
    const url3 = urlShortener.shorten(
      "https://facebook.com/hello/world/last-time"
    );

    expect(testingUrl).toEqual(urlShortener.restore(url2));
  });
});
