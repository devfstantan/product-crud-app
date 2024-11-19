import React from 'react'

export const Input = ({label, id, error=false, ...props}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label ">
        {label}
      </label>
      {error ? (
        <input {...props} id={id} className="form-control border border-danger"  />
      ):(
        <input {...props} id={id} className="form-control "  />
      )}
    </div>
  )
}
