import { Outlet, NavLink } from 'react-router-dom'
import './../styles/layouts.css'

enum Tag {
  New = 'New',
  Featured = 'Featured',
}

// const tags: Record<TagName, string> = {
//   New: '#00D959',
//   Featured: '#0171E2',
// }

// type Tag = {
//   name: 'New' | 'Featured'
//   color: tagColors
// }

// enum tagColors {
//   Green = '#00D959',
//   Blue = '#0171E2',
// }

type Links = {
  section: string
  routes: Route[]
}

type Route = {
  name: string
  to: string
  tag?: Tag
}

const SidebarLayout = () => {
  // TODO: components should be dynamic
  const links: Links[] = [
    {
      section: 'Getting Started',
      routes: [
        { name: 'Introduction', to: '/docs' },
        { name: 'Installation', to: '/docs/installation' },
        { name: 'Changelog', to: '/docs/changelog' },
      ],
    },
    {
      section: 'Components',
      routes: [
        {
          name: 'Accordion',
          to: '/docs/components',
          tag: Tag.New,
        },
        {
          name: 'Card',
          to: '/docs/components',
          tag: Tag.Featured,
        },
        {
          name: 'Button',
          to: '/docs/components',
        },
      ],
    },
  ]

  return (
    <div className='sidebar-layout'>
      <aside className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='sidebar-nav-list'>
            {links.map(({ section, routes }) => (
              <li key={section}>
                <h3 className='sidebar-nav-section'>{section}</h3>
                <ul className='sidebar-nav-list'>
                  {routes.map(route => (
                    <SidebarLink key={route.name} route={route} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

type SidebarLinkProps = {
  route: Route
}

const SidebarLink = ({ route }: SidebarLinkProps) => {
  return (
    <li>
      <NavLink
        to={route.to}
        end
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        {route.name}
        {route.tag && (
          <span className={`${route.tag.toLowerCase()} tag`}>{route.tag}</span>
        )}
      </NavLink>
    </li>
  )
}

export default SidebarLayout
