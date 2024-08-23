import { useState, useEffect } from 'react'
import '../styles/component.css'
import '../styles/globals.css'
import { Element as ElementType, Step as StepType } from '../App'
import { capitalize } from '../utils/capitalize'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

const Element = ({ element }: { element: ElementType }) => {
  const componentId = 'accordion'
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/${componentId}`)
      const data = await res.json()
      console.log(data)
    }
    getData()
  }, [])

  const { title, description, preview: componentPreview, code, steps } = element
  return (
    <main className='content'>
      <h1 className='page-heading'>{title}</h1>
      <p>{description}</p>
      <TabbedContent componentPreview={componentPreview} code={code} />
      <UsageSteps steps={steps} />
    </main>
  )
}

const TabbedContent = ({
  componentPreview,
  code,
}: {
  componentPreview: React.ReactNode
  code: string
}) => {
  type Tab = 'preview' | 'code'
  const [activeTab, setActiveTab] = useState<Tab>('preview')
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpand = () => {
    setIsExpanded(prev => !prev)
  }

  return (
    <section>
      <nav className='tab-controls'>
        <button
          onClick={() => setActiveTab('preview')}
          className={`tab-control ${
            activeTab === 'preview' ? 'active-tab' : ''
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`tab-control ${activeTab === 'code' ? 'active-tab' : ''}`}
        >
          Code
        </button>
      </nav>
      <div className=''>
        {activeTab === 'preview' && (
          <div className='tab-content'>{componentPreview}</div>
        )}
        {activeTab === 'code' && (
          <>
            <div className='code-preview--wrapper'>
              <code>
                <CodeMirror
                  value={code}
                  className='code-mirror'
                  editable={false}
                  extensions={[javascript({ jsx: true })]}
                  theme='dark'
                  maxHeight={isExpanded ? 'auto' : '240px'}
                />
              </code>
            </div>
            <div className='code-preview--controls'>
              <button className='button-copy'>Copy</button>
              <button onClick={handleExpand} className='button-size--toggle'>
                {isExpanded ? 'Collapse' : 'Expand'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

const UsageSteps = ({ steps }: { steps: StepType[] }) => {
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
}

const Step = ({
  title,
  step,
  description,
  code,
}: {
  title: string
  step: number
  description: string
  code: string | undefined
}) => {
  return (
    <div className='step'>
      <span className='step-number'>{step}</span>
      <p className='step-title'>{title}</p>
      <p className='step-description'>{description}</p>
      {code && <code>{code}</code>}
    </div>
  )
}

export default Element
