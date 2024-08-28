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
import Component from './pages/ComponentDetails'
// TEMPORARY
import ComponentPreview from './components/ComponentPreview'
import CodePreview from './components/CodePreview'

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
              <Route path='introduction' element={<Introduction />} />
              <Route path="components">
                <Route path="" element={<Navigate to="accordion" replace />} />
                <Route
                  index
                  path="accordion"
                  element={
                    <Component
                      overview={{
                        title: 'Accordion',
                        description:
                          'Lorem ipsum dolor sit amet. Non fugiat porro et aliquid autem aut officiis debitis qui minus repudiandae.',
                      }}
                      examples={[
                        {
                          name: 'Named Example 1',
                          previews: {
                            component: <ComponentPreview />,
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Named Example 2',
                          previews: {
                            component: <ComponentPreview />,
                            code: <CodePreview />,
                          },
                        },
                        // Add more examples as needed
                      ]}
                      code={'console.log("Hello World")'}
                      props={[
                        {
                          name: 'className',
                          type: 'string',
                          default: '-',
                          description: 'Additional class name',
                        },
                        {
                          name: 'style',
                          type: 'CSSProperties',
                          default: '-',
                          description: 'Inline styles for the component',
                        },
                        // Add more props as needed
                      ]}
                    />
                  }
                />
                <Route
                  path="card"
                  element={
                    <Component
                      overview={{
                        title: 'Card',
                        description:
                          'Lorem ipsum dolor sit amet. Non fugiat porro et aliquid autem aut officiis debitis qui minus repudiandae.',
                      }}
                      examples={[
                        {
                          name: 'Named Example 1',
                          previews: {
                            component: <ComponentPreview />,
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Named Example 2',
                          previews: {
                            component: <ComponentPreview />,
                            code: <CodePreview />,
                          },
                        },
                        // Add more examples as needed
                      ]}
                      code={'console.log("Hello World")'}
                      props={[
                        {
                          name: 'className',
                          type: 'string',
                          default: '-',
                          description: 'Additional class name',
                        },
                        {
                          name: 'style',
                          type: 'CSSProperties',
                          default: '-',
                          description: 'Inline styles for the component',
                        },
                        // Add more props as needed
                      ]}
                    />
                  }
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
