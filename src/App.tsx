import { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingLayout from './layouts/NavigationLayout'
import SidebarLayout from './layouts/SidebarLayout'
import LandingPage from './pages/Landing'
import NotFound from './pages/NotFound'
import Introduction from './pages/Introduction'
import Installation from './pages/Installation'
import Changelog from './pages/Changelog'
import Element from './pages/Element'
import ComponentsPage from './pages/ComponentsPage'
import { capitalize } from './utils/capitalize'

export type Step = {
  title: string
  description: string
  code?: string
}

export type Element = {
  // path: string
  title: string
  description: string
  preview: React.ReactNode
  code: string
  steps: Step[]
}

function App() {
  const [components, _] = useState(['accordion', 'card'])

  const elements = components.map(component => {
    const Component = lazy(
      () => import(`./components/${capitalize(component)}.tsx`)
    )
    return {
      path: component,
      element: {
        title: capitalize(component),
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia.',
        preview: (
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        ),
        code: `const UsageSteps = ({ steps }: { steps: StepType[] }) => {
  return (
    <section>
      <h2 className='secondary-heading'>Usage</h2>
      <div className='steps'>
        {steps.map((step, index) => (
          <Step
            key={index}
            step={index}
            title={step.title}
            description={step.description}
            code={step.code}
          />
        ))}
      </div>
    </section>
  )
}`,
        steps: [
          {
            title: 'Install the component',
            description: 'npm install @to-be-named/accordion',
            code: 'npm install @to-be-named/accordion',
          },
          {
            title: 'Import the component',
            description: 'import Accordion from "@to-be-named/accordion"',
          },
          {
            title: 'Use the component',
            description: 'Wrap the component in a div',
          },
        ],
      },
    }
  })

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='/docs' element={<SidebarLayout />}>
              <Route index element={<Introduction />} />
              <Route path='installation' element={<Installation />} />
              <Route path='changelog' element={<Changelog />} />
              <Route path='components'>
                <Route index element={<ComponentsPage />} />
                {elements.map(({ path, element }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Element element={element} />}
                  />
                ))}
              </Route>
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
