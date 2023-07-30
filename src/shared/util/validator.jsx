export const validator = (value, validators, length) => {
  let validation = true;
  for (const validator of validators) {
    if (validator === "REQUIRED") {
      if (value.length === 0 || value.length < 0)
        validation = false && validation;
    }
    if (validator === "MIN(5)") {
      if (value.length < 5) {
        validation = false && validation;
      }
    }
  }
  return validation;
};
