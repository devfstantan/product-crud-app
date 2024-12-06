import React from 'react'

export const DeleteBtn = ({
    label="Delete",
    confirm="Voulez-vous vraiment supprimer cet élément?",
    onDelete,
}) => {
  const handleClick = (e) => {
    if(window.confirm(confirm)){
      onDelete()
    }
  }
  return (
    <button className='btn btn-sm btn-danger' onClick={handleClick}>
      <i className="fa-solid fa-trash"></i> {label}
    </button>
  )
}
