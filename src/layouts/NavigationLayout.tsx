import { useState, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/navigation/index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='navigation-layout'>
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className='sidebar-toggle'
        >
          &#9776;
        </button>
        <SidenavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ul className='navigation-nav'>
          <li>
            <Link to='/' className='navigation-logo'>
              Component Library
            </Link>
          </li>
          <li>
            <Link to='/docs'>Docs</Link>
          </li>
          <li>
            <Link to='/docs/components'>Components</Link>
          </li>
        </ul>
        <div className='navigation-controls'>
          <button className='search-input'>
            Search Documentation<span className='search-input--icon'>⌘K</span>
          </button>
          <button className='theme-toggle'>☀️</button>
        </div>
      </nav>
      <Outlet />
      <div
        className={`mobile-sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}

const SidenavBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={`${isOpen ? 'on-screen' : 'off-screen'} mobile-sidebar`}>
      <button onClick={handleClick} className='sidebar-toggle'>
        X
      </button>
      <ul className='mobile-sidebar-nav'>
        <li>
          <Link
            to='/'
            onClick={handleClick}
            className='mobile-sidebar-nav-section'
          >
            Getting Started
          </Link>
        </li>
        <li>
          <Link
            to='/docs'
            onClick={handleClick}
            className='mobile-sidebar-nav-section'
          >
            Documentation
          </Link>
        </li>
        <li>
          <Link
            to='/docs/components'
            onClick={handleClick}
            className='mobile-sidebar-nav-section'
          >
            Components
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
