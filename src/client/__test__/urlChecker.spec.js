import { isValidUrl } from "../js/urlChecker";

describe("Testing the url checker", () => {
  test("'https://www.google.com' is a valid url", () => {
    expect(isValidUrl("https://www.google.com")).toBe(true);
  });
  test("'google.com' is a invalid url", () => {
    expect(isValidUrl("google.com")).toBe(false);
  });
});
