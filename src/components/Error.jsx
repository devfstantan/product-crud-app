import React from 'react'

export const Error = ({error=null}) => {
  return error && (
    <div className="text-center text-danger p-3">
        {error}
    </div>
  )
}
