import React from 'react'

export const Input = ({
  label, 
  id, 
  validate=true, 
  ...props
}) => {
  
  const isError = validate instanceof Error;
  const classes = isError ? "form-control is-invalid":"form-control";
 
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label ">
        {label}
      </label>
      <input {...props} id={id} className={classes}  />
      {isError && (
        <div  class="invalid-feedback">{validate.message}</div>
      )}
     
    </div>
  )
}
