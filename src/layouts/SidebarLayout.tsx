import { Outlet, NavLink } from 'react-router-dom'

const SidebarLayout = () => {
  return (
    <div className="flex">
      <aside className="hidden pb-6 pr-6 sm:sticky sm:top-16 sm:block sm:h-screen sm:min-w-fit">
        <nav className="sidebar">
          <ul className="mb-4">
            <li className="sidebar-group-heading">Getting Started</li>
            <li>
              <NavLink to="/docs/introduction" className="sidebar-link">
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
              <NavLink to="./components/card" className="sidebar-link tag-new">
                Card
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
