import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'

export const Layout = () => {
  return (
    <div className="container">
        <header className='mb-3'>
            <Nav /> 
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
