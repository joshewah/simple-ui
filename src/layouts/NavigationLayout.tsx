import { Instagram, Moon, PanelLeftOpen, Sun } from 'lucide-react'
import { Outlet, Link } from 'react-router-dom'
import GitHubIcon from '../assets/github'

type NavigationLayoutProps = {
  theme: string
  handleThemeChange: () => void
}

const NavigationLayout = ({
  theme,
  handleThemeChange,
}: NavigationLayoutProps) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo hidden md:block">
          Components
        </Link>
        {/* TODO: Add mobile menu w/state */}
        <button className="md:hidden">
          <PanelLeftOpen size={18} strokeWidth={2.5} />
        </button>
        <div className="flex gap-3">
          <Link to="https://www.instagram.com/shua.dev/">
            <Instagram className="h-4 w-4 stroke-[2.5px]" />
          </Link>
          <Link to="#">
            <GitHubIcon className="icon" />
          </Link>
          <button onClick={handleThemeChange}>
            {theme === 'light' ? (
              <Moon size={18} strokeWidth={2.5} />
            ) : (
              <Sun size={18} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavigationLayout
