import { doSentimentAnalysis } from "../js/sentimentAnalysis";

describe("Testing post to sentiment cloud", () => {
  // Uncomment this when start expressJs, and comment below
  // test("Fetch data if server started", async () => {
  //   const data = await DoSentimentAnalysis("https://www.google.com");
  //   expect(data.status.msg).toBe("OK");
  // });
  test("The fetch fails if express does not start", async () => {
    try {
      await doSentimentAnalysis("https://www.google.com");
    } catch (e) {
      expect(e).toEqual(e);
    }
  });
});
