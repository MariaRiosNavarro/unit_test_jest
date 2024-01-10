import { holeAlleProdukte, gesamtWertdesLagers } from "./produkte.js";
import { jest } from "@jest/globals";

//REPARIEREN SPATER

// //Wir mocken den ganze module
// jest.mock("./produkte.js", () => {
//   //holen den original
//   const original = jest.requireActual("/produkte.js");

//   return {
//     __esModule: true,
//     holeAlleProdukte: jest.fn(() => {
//       return { name: "Bieber", preis: 10, anzahl: 3 };
//     }),
//   };
// });

test("Wir haben etwas gemockt", () => {
  const produkte = holeAlleProdukte();
  const summe = gesamtWertdesLagers(produkte);
  expect(summe).toBe(30);
});
