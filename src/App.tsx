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
import Button from './components/Button'
import TailwindIcon from './assets/tailwind'
// TEMPORARY
import ComponentPreview from './components/ComponentPreview'
import CodePreview from './components/CodePreview'
import { ChevronRight } from 'lucide-react'

function App() {
  const { theme, handleThemeChange } = useTheme()

  // THIS IS ALL THE INFORMATION FOR THE COMPONENT DETAIL PAGE FOR THE BUTTON
  //   overview={{
  //     title: 'Button',
  //     description:
  //       'Lorem ipsum dolor sit amet. Non fugiat porro et aliquid autem aut officiis debitis qui minus repudiandae.',
  //   }}
  //   examples={[
  //     {
  //       name: 'Primary',
  //       previews: {
  //         component: (
  //           <ComponentPreview
  //             preview={<Button>Button</Button>}
  //           />
  //         ),
  //         code: <CodePreview />,
  //       },
  //     },
  //     {
  //       name: 'Secondary',
  //       previews: {
  //         component: (
  //           <ComponentPreview
  //             preview={
  //               <Button variant="secondary" style="snug">
  //                 Button
  //               </Button>
  //             }
  //           />
  //         ),
  //         code: <CodePreview />,
  //       },
  //     },
  //     {
  //       name: 'Outline',
  //       previews: {
  //         component: (
  //           <ComponentPreview
  //             preview={
  //               <Button variant="outline">Button</Button>
  //             }
  //           />
  //         ),
  //         code: <CodePreview />,
  //       },
  //     },
  //     {
  //       name: 'Ghost',
  //       previews: {
  //         component: (
  //           <ComponentPreview
  //             preview={
  //               <Button variant="ghost">Button</Button>
  //             }
  //           />
  //         ),
  //         code: <CodePreview />,
  //       },
  //     },
  //     {
  //       name: 'Accent',
  //       previews: {
  //         component: (
  //           <ComponentPreview
  //             preview={
  //               <Button variant="accent">Button</Button>
  //             }
  //           />
  //         ),
  //         code: <CodePreview />,
  //       },
  //     },
  //     // Add more examples as needed
  //   ]}
  //   code={'console.log("Hello World")'}
  //   props={[
  //     {
  //       name: 'className',
  //       type: 'string',
  //       default: '-',
  //       description: 'Additional class name',
  //     },
  //     {
  //       name: 'style',
  //       type: 'CSSProperties',
  //       default: '-',
  //       description: 'Inline styles for the component',
  //     },
  //     // Add more props as needed
  //   ]}
  // />

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
                            component: (
                              <ComponentPreview
                                preview={<Button>Button</Button>}
                              />
                            ),
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Named Example 2',
                          previews: {
                            component: (
                              <ComponentPreview
                                preview={<Button>Button</Button>}
                              />
                            ),
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
                  path="button"
                  element={
                    <Component
                      overview={{
                        title: 'Button',
                        description:
                          'Lorem ipsum dolor sit amet. Non fugiat porro et aliquid autem aut officiis debitis qui minus repudiandae.',
                      }}
                      examples={[
                        {
                          name: 'Primary',
                          previews: {
                            component: (
                              <ComponentPreview
                                preview={<Button>Button</Button>}
                              />
                            ),
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Secondary',
                          previews: {
                            component: (
                              <ComponentPreview
                                preview={
                                  <Button variant="secondary" style="snug">
                                    Button
                                  </Button>
                                }
                              />
                            ),
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Outline',
                          previews: {
                            component: (
                              <ComponentPreview
                                preview={
                                  <Button variant="outline">Button</Button>
                                }
                              />
                            ),
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Ghost',
                          previews: {
                            component: (
                              <ComponentPreview
                                preview={
                                  <Button variant="ghost">Button</Button>
                                }
                              />
                            ),
                            code: <CodePreview />,
                          },
                        },
                        {
                          name: 'Accent',
                          previews: {
                            component: (
                              <ComponentPreview
                                preview={
                                  <Button variant="accent">Button</Button>
                                }
                              />
                            ),
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
