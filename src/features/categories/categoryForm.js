import { maxLength, required } from "../../utils/validators";


// form initial State
export const intialValue = {
  name: "",
};

// Validation rules
export const rules = {
  name: (v) => required(v) && maxLength(v, 30),
};

// Form validation function
export function validate(form) {
  let errors = {};

  return errors;
}
