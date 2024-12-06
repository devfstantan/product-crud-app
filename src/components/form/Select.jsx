import React from 'react'

/**
 * options : [{value:"1", label:'Option Text'}]
 * 
 */
export const Select = ({
  label, 
  id, 
  validate=true, 
  options=[], 
  emptyOption="Choisir",
  ...props
}) => {
  
  const isError = validate instanceof Error;
  const classes = isError ? "form-select is-invalid":"form-select";

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label ">
        {label}
      </label>
      <select {...props} id={id} className={classes}>
        <option value="">{emptyOption}</option>
        {options.map(opt => <option value={opt.value}>{opt.label}</option>)}
      </select>
      {isError && (
        <div  class="invalid-feedback">{validate.message}</div>
      )}
    </div>
  )
}
