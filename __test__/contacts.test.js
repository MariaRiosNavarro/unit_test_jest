import { addContacts, getContacts, sum, getfirstContact } from "../contacts";
import {} from "../contacts";

test("Addiere 1+2 ist 3", () => {
  expect(sum(2, 1)).toBe(3);
});

test("erwarten das erstes element des Kontaktearray Maria ist", () => {
  expect(getfirstContact()).toBe("Maria");
});

test("erwarte das ich ein Array become", () => {
  expect(getContacts()).toBeInstanceOf(Array);
});

test("Erwarte das die länge des Arrays sich ändert", () => {
  const lengthBefore = getContacts().length;
  addContacts("Peter");
  const lengthAfter = getContacts().length;
  expect(lengthAfter).toBeGreaterThan(lengthBefore);
});
