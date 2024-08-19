import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingLayout from './layouts/NavigationLayout'
import SidebarLayout from './layouts/SidebarLayout'
import LandingPage from './pages/Landing'
import NotFound from './pages/NotFound'
import Introduction from './pages/Introduction'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='/docs' element={<SidebarLayout />}>
              <Route index element={<Introduction />} />
              <Route path='installation' element={<h1>Install</h1>} />
              <Route path='changelog' element={<h1>Changelog</h1>} />
              <Route path='components' element={<h1>Components</h1>} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
