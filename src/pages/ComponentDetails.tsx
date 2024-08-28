import { Component } from 'lucide-react'
import CodePreview from '../components/CodePreview'
import ComponentPreview from '../components/ComponentPreview'
import Tab from '../components/Tab/Tab'

type ComponentDetailsProps = {
  overview: {
    title: string
    description: string
    usage?: string
  }
  examples: Array<{
    name: string
    previews: {
      component: React.ReactNode
      code: React.ReactNode
    }
  }>
  code: string
  props: Array<{
    name: string
    type: string
    default: string
    description: string
  }>
}

const ComponentDetails = ({
  overview,
  examples,
  code,
  props,
}: ComponentDetailsProps) => {
  return (
    <div className="flex w-full">
      <div className="flex max-w-prose flex-1 flex-col sm:ml-8">
        {/* <ComponentOverview id='overview' overview={overview} /> */}
        {/* <ComponentExamples id='examples' examples={examples} /> */}
        {/* <ComponentCode id='code' code={code} /> */}
        {/* <ComponentPropsTable id='props' props={props} /> */}
        <section id="overview" className="mb-8">
          <h2>{overview.title}</h2>
          <p>{overview.description}</p>
        </section>

        <section id="examples" className="mb-8">
          <h3>Examples</h3>
          {examples.map((example) => (
            <>
              <h4>{example.name}</h4>
              <Tab
                componentPreview={example.previews.component}
                codePreview={example.previews.code}
              />
            </>
          ))}
        </section>

        <section id="code" className="mb-8">
          <h3>Code</h3>
          {/* PROPS TO BE ADDED */}
          {/* <CodePreview value={code} /> */}
          <CodePreview />
        </section>

        <section id="props" className="mb-8">
          <h3>Props</h3>
          {/* <PropsTable props={props} /> */}
          <table className="w-full overflow-x-scroll">
            <thead className="border-b-stoke-color h-8 border-b-2 text-left text-sm font-medium">
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="font-base text-text-secondary-color text-left text-xs">
              {props.map((prop) => (
                <tr className="border-b-stoke-color h-8 border-b-[1px] last:border-b-0">
                  <td>{prop.name}</td>
                  <td>{prop.type}</td>
                  <td>{prop.default}</td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-16 flex justify-end">
          <a href="#overview">Back to top</a>
        </section>
      </div>
      <aside className="ml-auto hidden pl-8 lg:sticky lg:top-20 lg:block lg:h-screen lg:min-w-fit">
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="sidebar-group-heading">Page Shortcuts</li>
            <a href="#overview" className="sidebar-link">
              Overview
            </a>
            <a href="#examples" className="sidebar-link">
              Examples
            </a>
            <a href="#code" className="sidebar-link">
              Code
            </a>
            <a href="#props" className="sidebar-link">
              Props
            </a>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default ComponentDetails
