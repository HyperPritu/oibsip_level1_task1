import React from 'react'
import { Navbar } from './Navbar/Navbar'
import './header.css'

export const Header = () => {
  return (
    <header className="header">
        <Navbar/>
        <div className='header-body container flex'>
            <h1 className='header-text'>We are creatives</h1>
            <span className='arrow'></span>
        </div>
    </header>
  )
}
