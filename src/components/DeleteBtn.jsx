import React from 'react'

export const DeleteBtn = ({
    label="Delete"
}) => {
  return (
    <button className='btn btn-sm btn-danger'><i class="fa-solid fa-trash"></i> {label}</button>
  )
}
