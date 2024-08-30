import { Component } from 'lucide-react'
import CodePreview from '../components/CodePreview'
import ComponentPreview from '../components/ComponentPreview'
import Tab from '../components/Tab/Tab'

export type ComponentDetails = {
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

type ComponentDetailsProps = {
  data: ComponentDetails
}

const ComponentDetails = ({ data }: ComponentDetailsProps) => {
  const { overview, examples, code, props } = data
  return (
    <div className="flex max-w-prose justify-between">
      <div className="flex max-w-prose flex-1 flex-col overflow-x-scroll sm:ml-8">
        {/* <ComponentOverview id='overview' overview={overview} /> */}
        {/* <ComponentExamples id='examples' examples={examples} /> */}
        {/* <ComponentCode id='code' code={code} /> */}
        {/* <ComponentPropsTable id='props' props={props} /> */}
        <section id="overview" className="mb-8">
          <h2>{overview.title}</h2>
          <p>{overview.description}</p>
        </section>

        <section id="examples" className="mb-8">
          <h3 className="border-b-[1.5px] border-b-stoke-color pb-1">
            Examples
          </h3>
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
          <CodePreview filename="Button.tsx" code={code} />
        </section>

        <section id="props" className="mb-8">
          <h3>Props</h3>
          {/* <PropsTable props={props} /> */}
          <table className="w-full overflow-x-scroll">
            <thead className="h-8 border-b-2 border-b-stoke-color text-left text-sm font-medium">
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="font-base text-left text-xs text-text-secondary-color">
              {props.map((prop) => (
                <tr className="h-8 border-b-[1px] border-b-stoke-color last:border-b-0">
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
      <aside className="hidden lg:sticky lg:right-0 lg:top-0 lg:block lg:h-full lg:min-w-fit lg:max-w-fit">
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
