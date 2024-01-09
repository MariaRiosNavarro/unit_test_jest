import { werfer } from "./admin.controller.js";
describe("Ein weitere Testsuite", () => {
  test("Erster test in der Suite", () => {
    expect(true).toBeTruthy();
  });
  test("Edgecase und erwarten einen Fehler throw", () => {
    expect(() => werfer(5435)).toThrow();
  });
  test("Wir erwarten ein true wenn wir Hallo übergeben", () => {
    expect(werfer("hallo")).toBeTruthy();
  });
});
