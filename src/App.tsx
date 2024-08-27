import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationLayout from './layouts/NavigationLayout'
import SidebarLayout from './layouts/SidebarLayout'
import LandingPage from './pages/static/Landing'
import NotFound from './pages/error/NotFound'
import ComponentNotFound from './pages/error/ComponentNotFound'
import Introduction from './pages/static/Introduction'
import Element from './pages/Element'
import { useTheme } from './hooks/useTheme'


function App() {
  const { theme, handleThemeChange } = useTheme()
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NavigationLayout
                theme={theme}
                handleThemeChange={handleThemeChange}
              />
            }
          >
            <Route index element={<LandingPage />} />
            <Route path="/docs" element={<SidebarLayout />}>
              <Route index element={<Introduction />} />
              <Route path="components">
                <Route path=":id" element={<Element />} />
                <Route path="*" element={<ComponentNotFound />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
