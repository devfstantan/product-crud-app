

export function required(value) {
  return value?.length > 0;
}
export function maxLength(value, max = 100) {
  return value?.length <= max;
}
export function between(value, min = 0, max = 100) {
  let v = Number(value);
  return !isNaN(v) && v >= min && v <= max;
}

export function cin(value, partial = false) {
  if (partial) {
    return (
      value?.length === 0 ||
      (value?.length <= 8 && value.match("^[A-Z]{1,2}[0-9]*$"))
    );
  }
  return  value.match("^[A-Z]{1,2}[0-9]{4,6}$")
}


/**
 * checks if the value respects validation rules
 * exemple of rules array: 
 * [
 *    {
 *      rule : (v) => required(v),
 *      message: "Le nom est obligatoire"
 *    },{
 *      rule: (v) => maxLength(v, 30),
 *      message: "Le nom ne doit pas dépasser 30 caractères"
 *    }
 * ]
 *
 * @param {any} value field value
 * @param {any[]} rules array of rules 
 * @param {boolean} returnBool return type boolean or Error object.
 * @returns boolean | Error depends on returnBool ,
 */
export function validateField(value, rules=[], returnBool=false){
  for (const {rule, message} of rules) {
    if(!rule(value)){
      return returnBool ? false: new Error(message)
    }
  }
  
  return true;
}

/**
 * validates all form fields
 * exemple of rules object
 * const rules = {
 *  name: [
 *    {
 *      rule : (v) => required(v),
 *      message: "Le nom est obligatoire"
 *    },{
 *      rule: (v) => maxLength(v, 30),
 *      message: "Le nom ne doit pas dépasser 30 caractères"
 *    }
 *  ]
 *}
 * @param {Object} form the form object
 * @param {Obejct} rules rules object
 * @returns {boolean} is the form is valid or not.
 */
export function validateForm(form, rules){
  
  for (const field of Object.keys(form)) {
    if(!validateField(form[field], rules[field] || [], true)){
      return false
    }
  }

  return true;
}