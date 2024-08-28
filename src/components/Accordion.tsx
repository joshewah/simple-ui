import CodePreview from './CodePreview'
import ComponentPreview from './ComponentPreview'
import Tab from './Tab/Tab'

type ComponentProps = {
  title: string
  description: string
  examples: [
    {
      name: string
      previews: {
        component: React.ReactNode
        code: React.ReactNode
      }
    },
  ]
  code: React.ReactNode
  props: {
    name: string
    type: string
    default: string
    description: string
  }
}

const Accordion = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col sm:ml-8">
        {/* OVERVIEW */}
        <section id="overview" className="mb-8">
          <h2>Accordion</h2>
          <p>
            Lorem ipsum dolor sit amet. Non fugiat porro et aliquid autem aut
            officiis debitis qui minus repudiandae.
          </p>
        </section>

        {/* EXAMPLES */}
        <section id="examples" className="mb-8">
          <h3>Examples</h3>
          <h4>Named Example 1</h4>
          <Tab
            componentPreview={<ComponentPreview />}
            codePreview={<CodePreview />}
          />
          <h4>Named Example 1</h4>
          <Tab
            componentPreview={<ComponentPreview />}
            codePreview={<CodePreview />}
          />
          <h4>Named Example 1</h4>
          <Tab
            componentPreview={<ComponentPreview />}
            codePreview={<CodePreview />}
          />
        </section>

        {/* CODE */}
        <section id="code" className="mb-8">
          <h3>Code</h3>
          {/* PROPS TO BE ADDED */}
          <CodePreview />
        </section>

        {/* PROPS */}
        <section id="props" className="mb-8">
          <h3>Props</h3>
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
              <tr className="border-b-stoke-color h-8 border-b-[1px] last:border-b-0">
                <td>className</td>
                <td>string</td>
                <td>-</td>
                <td>Additional class name</td>
              </tr>
              <tr className="border-b-stoke-color h-8 border-b-[1px] last:border-b-0">
                <td>children</td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>Content of the accordion</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-16 flex justify-end">
          <a href="#overview">Back to top</a>
        </section>
      </div>
      <aside className="ml-auto hidden pl-8 lg:block lg:min-w-fit">
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

export default Accordion
