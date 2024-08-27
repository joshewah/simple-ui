import { Outlet, Link } from 'react-router-dom'

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
      <nav>nav</nav>
      <Outlet />
    </>
  )
}

export default NavigationLayout
