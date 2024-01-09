export function werfer(argument) {
  if (argument === "hallo") {
    return true;
  } else {
    throw new Error();
  }
}
