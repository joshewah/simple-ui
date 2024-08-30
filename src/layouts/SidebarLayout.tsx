import { Outlet, NavLink } from 'react-router-dom'
import SidebarList from './SidebarList'

const SidebarLayout = () => {
  return (
    <div className="flex justify-center sm:justify-start">
      <aside className="hidden pb-6 pr-6 sm:block sm:min-w-fit">
        <nav className="sidebar">
          <SidebarList type={'NavLink'} />
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default SidebarLayout
