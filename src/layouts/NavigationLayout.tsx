import {
  Instagram,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
} from 'lucide-react'
import { Outlet, Link } from 'react-router-dom'
import GitHubIcon from '../assets/github'
import { useState, useRef } from 'react'
import SidebarList from './SidebarList'

type NavigationLayoutProps = {
  theme: string
  handleThemeChange: () => void
}

const NavigationLayout = ({
  theme,
  handleThemeChange,
}: NavigationLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarPopoutRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    sidebarPopoutRef.current?.classList.add('animateOut')
    overlayRef.current?.classList.add('fadeOutOverlay')

    setTimeout(() => {
      setIsOpen(false)
      sidebarPopoutRef.current?.classList.remove('animateOut')
    }, 400)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <>
      <nav className="navbar sticky top-0 z-10 mb-6 h-fit border-b border-b-stoke-color bg-background py-2">
        <div className="flex flex-row-reverse gap-2 sm:flex-row">
          <Link to="/" className="logo" reloadDocument>
            Components
          </Link>
          <button className="sm:hidden" onClick={handleOpen}>
            <PanelLeftOpen size={18} strokeWidth={2.5} />
          </button>
        </div>
        {isOpen && (
          <nav className="no-doc-scroll">
            <div ref={overlayRef} className="overlay fadeInOverlay" />
            <div
              ref={sidebarPopoutRef}
              className="animateIn fixed inset-0 z-10 h-screen w-fit bg-background-card px-4 py-2"
            >
              <header className="mb-4 flex items-center justify-between gap-4">
                <Link to="/" className="logo">
                  Components
                </Link>
                <button className="close" onClick={handleClose}>
                  <PanelLeftClose size={18} strokeWidth={2.5} />
                </button>
              </header>
              <SidebarList />
            </div>
          </nav>
        )}
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
