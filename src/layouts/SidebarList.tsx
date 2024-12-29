import { NavLink } from 'react-router-dom'

type LinkProps = {
  type: 'title' | 'link'
  label: string
  to?: string
  new?: boolean
}

const dummyLinks: LinkProps[] = [
  {
    type: 'title',
    label: 'Getting Started',
  },
  {
    type: 'link',
    to: '/docs',
    label: 'Introduction',
  },
  {
    type: 'title',
    label: 'Components',
  },
  {
    type: 'link',
    to: '/docs/components/accordion',
    label: 'Accordion',
  },
  {
    type: 'link',
    to: '/docs/components/button',
    label: 'Button',
  },
  {
    type: 'link',
    to: '/docs/components/card',
    label: 'Card',
  },
  {
    type: 'title',
    label: 'Text',
  },
  {
    type: 'link',
    to: '/docs/text/counter',
    label: 'Counter Animation',
    new: true,
  },
]

const SidebarList = () => {
  return (
    <>
      <ul className="mb-4 flex flex-col">
        {dummyLinks.map((link: LinkProps, index: number) => {
          if (link.type === 'title') {
            return (
              <li
                key={index}
                className="sidebar-group-heading mt-4 first-of-type:mt-0"
              >
                {link.label}
              </li>
            )
          } else {
            return (
              <li key={index}>
                <NavLink
                  to={link.to!}
                  className={`sidebar-link ${link.new ? 'tag-new' : ''}`}
                  reloadDocument
                >
                  {link.label}
                </NavLink>
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}

export default SidebarList
