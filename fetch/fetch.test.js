import fetchData from "./fetch.js";

describe("fetchData function", () => {
  test("should resolve with data from API", async () => {
    const result = await fetchData();
    expect(result).toBe("Data from API");
  });
});

//
