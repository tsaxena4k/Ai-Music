import React from 'react'
import WebcamComponent from './WebcamComponent'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='main-container'>
      <Outlet />
    </div>
  )
}

export default Body