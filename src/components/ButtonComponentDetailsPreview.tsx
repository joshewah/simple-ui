import Button from './Button'
import ComponentPreview from './ComponentPreview'
import CodePreview from './CodePreview'

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

export default ButtonComponentDetailsPreview = () => {
  const temp: ComponentDetailsProps = {
    overview: {
      title: 'Button',
      description:
        'Lorem ipsum dolor sit amet. Non fugiat porro et aliquid autem aut officiis debitis qui minus repudiandae.',
    },
    examples: [
      {
        name: 'Primary',
        previews: {
          component: <ComponentPreview preview={<Button>Button</Button>} />,
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
              preview={<Button variant="outline">Button</Button>}
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
              preview={<Button variant="ghost">Button</Button>}
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
              preview={<Button variant="accent">Button</Button>}
            />
          ),
          code: <CodePreview />,
        },
      },
      // Add more examples as needed
    ],
    //   Should be read from the component file
    code: `console.log("Hello World")'`,
    props = [
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
    ],
  }
}
// THIS IS ALL THE INFORMATION FOR THE COMPONENT DETAIL PAGE FOR THE BUTTON
