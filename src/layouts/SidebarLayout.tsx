import { Outlet, NavLink } from 'react-router-dom'

const SidebarLayout = () => {
  return (
    <div className="flex overflow-auto">
      <aside className="hidden pb-6 pr-6 sm:block sm:min-w-fit">
        <nav className="sidebar">
          <ul className="mb-4">
            <li className="sidebar-group-heading">Getting Started</li>
            <li>
              <NavLink to="/" className="sidebar-link">
                Introduction
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="sidebar-group-heading">Components</li>
            <li>
              <NavLink to="./components/accordion" className="sidebar-link">
                Accordion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="./components/button"
                className="sidebar-link tag-new"
              >
                Button
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default SidebarLayout
