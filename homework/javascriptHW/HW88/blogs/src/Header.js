import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>PCS Blogs</h1>
      <NavLink to='/blogs'>blog list</NavLink>
      <hr />
    </header>
  )
}
