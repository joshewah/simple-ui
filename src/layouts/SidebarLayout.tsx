import { Outlet, NavLink } from 'react-router-dom'

const SidebarLayout = () => {
  return (
    <aside>
      <nav>Sidebar</nav>
      <Outlet />
    </aside>
  )
}

export default SidebarLayout
