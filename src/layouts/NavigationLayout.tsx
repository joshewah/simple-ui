import { Outlet, Link } from 'react-router-dom'
import './../styles/layouts.css'

const Navbar = () => {
  return (
    <>
      <nav className='navigation-layout'>
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
    </>
  )
}

export default Navbar
