import { maxLength, required } from "../../utils/validators";




// Validation rules
export const rules = {
  name: (v) => required(v) && maxLength(v, 30),
};

// Form validation function
export function validate(form) {
  let errors = {};
  if(!rules["name"](form?.name)){
    errors.name = true;
  }

  return errors;
}
