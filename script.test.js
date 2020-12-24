//hier functie-objecten toevoegen
const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./script.js");

//password is korter dan 9 karakters

test("password is shorter than 9 chars", () => {
  const password = "asdfeqw";
  const expected = true;
  const output = hasRightLength(password);

  expect(output).toEqual(expected);
});

//password is niet null
test("is not null", () => {
  password = null;
  const expected = false;
  const output = isNotNull(password);

  expect(output).toEqual(expected);
});

//password heeft 1 of meer uppercase karakters
test("has one or more uppercases", () => {
  password = "kkbg";
  const expected = true;
  const output = hasUpperCaseCharacter(password);

  expect(output).toEqual(expected);
});

//password heeft 1 of meer lowercase karakters

//password heeft 1 of meer cijfers
