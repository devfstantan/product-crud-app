import React from 'react'

/**
 * options : [{value:"1", label:'Option Text'}]
 * 
 */
export const Select = ({
  label, 
  id, 
  error=false, 
  options=[], 
  emptyOption="Choisir",
  ...props
}) => {
  
  const classes = error ? "form-select border border-danger":"form-select";

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label ">
        {label}
      </label>
      <select {...props} id={id} className={classes}>
        <option value="">{emptyOption}</option>
        {options.map(opt => <option value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  )
}
