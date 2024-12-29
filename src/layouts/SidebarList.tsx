import { NavLink, Link } from 'react-router-dom'

type SidebarListProps = {
  type: 'NavLink' | 'Link'
}

const SidebarList = ({ type }: SidebarListProps) => {
  if (type === 'Link') {
    return (
      <>
        <ul className="mb-4 flex flex-col">
          <li className="sidebar-group-heading">Getting Started</li>
          <li>
            <Link to="/docs" className="sidebar-link" reloadDocument>
              Introduction
            </Link>
          </li>
        </ul>
        <ul>
          <li className="sidebar-group-heading">Components</li>
          <li>
            <Link
              to="/docs/components/accordion"
              className="sidebar-link"
              reloadDocument
            >
              Accordion
            </Link>
          </li>
          <li>
            <Link
              to="/docs/components/button"
              className="sidebar-link tag-new"
              reloadDocument
            >
              Button
            </Link>
          </li>
          <li>
            <Link
              to="/docs/components/card"
              className="sidebar-link tag-new"
              reloadDocument
            >
              Card
            </Link>
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <ul className="mb-4 flex flex-col">
        <li className="sidebar-group-heading">Getting Started</li>
        <li>
          <NavLink to="/docs" className="sidebar-link" reloadDocument>
            Introduction
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className="sidebar-group-heading">Components</li>
        <li>
          <NavLink
            to="/docs/components/accordion"
            className="sidebar-link"
            reloadDocument
          >
            Accordion
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/docs/components/button"
            className="sidebar-link tag-new"
          >
            Button
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/docs/components/card"
            className="sidebar-link tag-new"
            reloadDocument
          >
            Card
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default SidebarList
