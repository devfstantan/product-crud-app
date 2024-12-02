import React from 'react'

export const Loader = ({loading=false, text="Loading"}) => {
  return loading && (
    <div className="text-center p-3">
        <i className="fa-solid fa-spinner fa-spin"></i> {text}
    </div>
  )
}
