

export function required(value) {
  return value.length > 0;
}
export function maxLength(value, max = 100) {
  return value.length <= max;
}
export function between(value, min = 0, max = 100) {
  let v = Number(value);
  return !isNaN(v) && v >= min && v <= max;
}

export function cin(value, partial = false) {
  if (partial) {
    return (
      value.length === 0 ||
      (value.length <= 8 && value.match("^[A-Z]{1,2}[0-9]*$"))
    );
  }
  return  value.match("^[A-Z]{1,2}[0-9]{4,6}$")
}
