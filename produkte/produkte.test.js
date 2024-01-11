import { holeAlleProdukte, gesamtWertdesLagers } from "./produkte.js";

test("Rechne die Functionen alles Korrekt aus?", () => {
  const produkte = holeAlleProdukte();
  const summe = gesamtWertdesLagers(produkte);
  expect(summe).toBe(20);
});
