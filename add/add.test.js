import { add } from "./add";

test("add() returns 5 if called with add(2,3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
