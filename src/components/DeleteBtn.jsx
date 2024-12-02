import React from 'react'

export const DeleteBtn = ({
    label="Delete"
}) => {
  return (
    <button className='btn btn-sm btn-danger'><i className="fa-solid fa-trash"></i> {label}</button>
  )
}
