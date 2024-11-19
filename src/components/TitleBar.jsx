import React from 'react'

export const TitleBar = ({
    title,
    actions=""
}) => {
  return (
    <div className="d-flex justify-content-between align-items-baseline border-bottom pb-2 mb-3">
        <h2>{title}</h2>
        <div className='d-flex justify-content-end align-items-baseline gap-2'>
            {actions}
        </div>
      </div>
  )
}
