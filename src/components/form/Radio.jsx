import React from 'react'

export const Radio = ({label, id, ...props}) => {
  return (
    <div className="form-check form-check-inline">
              <input
                {...props}
                className="form-check-input"
                type="radio"
                id={id}
                value={id}
                
              />
              <label className="form-check-label" htmlFor={id}>
                {label}
              </label>
            </div>
  )
}
