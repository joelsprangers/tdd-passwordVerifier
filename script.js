// Utility functions
const isNotNull = (str) => {
  if (str === null) {
    return false;
  } else {
    return true;
  }
};

const hasRightLength = (word) => {
  if (word.length < 9) {
    return true;
  } else {
    return false;
  }
};

const hasUpperCaseCharacter = (str) => {
  let arrayOfChars = [];
  checkIfUpper = false;

  for (i = 0; i < str.length; i++) {
    arrayOfChars.push(str[i]);
  }

  arrayOfChars.forEach((char) => {
    if (char != char.toUpperCase()) {
      checkIfUpper = true;
    }
  });
  return checkIfUpper;
};

const hasLowerCaseCharacter = (str) => str;

const hasDigit = (str) => str;

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
