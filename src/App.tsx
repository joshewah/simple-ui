import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import NavigationLayout from './layouts/NavigationLayout'
import SidebarLayout from './layouts/SidebarLayout'
import LandingPage from './pages/static/Landing'
import NotFound from './pages/error/NotFound'
import ComponentNotFound from './pages/error/ComponentNotFound'
import Introduction from './pages/static/Introduction'
import { useTheme } from './hooks/useTheme'
import ComponentDetails from './pages/ComponentDetails'
import TailwindIcon from './assets/tailwind'
// TEMPORARY
import ButtonData from './components/ButtonData'
import CardData from './components/CardData'

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
              <Route path="" element={<Navigate to="introduction" replace />} />
              <Route path="introduction" element={<Introduction />} />
              <Route path="components">
                <Route index path=":componentId" />
                {/* <Route path="" element={<Navigate to="accordion" replace />} /> */}
                <Route
                  path="button"
                  element={<ComponentDetails data={ButtonData} />}
                />
                <Route
                  path="card"
                  element={<ComponentDetails data={CardData} />}
                />
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
