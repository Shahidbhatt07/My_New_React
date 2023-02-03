import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <h1>Hello i am contact</h1>
      <button className='btn'><Link to = {"Insta"}> contact via Instagram</Link></button>
      <button className='btn'><Link to={"Mail"} >contact via Mail</Link></button>
      <Outlet />
    </>
  )
}

export default Contact
