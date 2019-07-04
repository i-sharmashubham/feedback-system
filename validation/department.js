const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddDepartment(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Department Name is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Department Coordinator Email is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Department Coordinator Phone is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};