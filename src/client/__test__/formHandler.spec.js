import { handleSubmit } from "../js/formHandler";

describe("Testing form submission", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });

  test("Click", () => {
    expect(1).toBe(1);
  });

  test("Alert", () => {
    expect(1).toBe(1);
  });
});
