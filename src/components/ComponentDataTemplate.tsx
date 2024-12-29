import Button, { Variants, Styles } from './Button' // ? Import the component & the types needed
import ComponentCode from './<COMPONENT_NAME>?raw' // ? Gets the raw code of the component
import { ComponentDetails } from '../pages/ComponentDetails' // ? Make sure the type is correct for displaying component

// ? Components need to display the component, and code
import ComponentPreview from './ComponentPreview'
import CodePreview from './CodePreview'

interface Example {
  name: string
  previews: {
    component: React.ReactNode
    code: React.ReactNode
  }
}

// Helper function to generate examples
const createExample = (
  name: string,
  description?: string, // ? Optional description if more info is required
  variant?: Variants,
  style?: Styles,
): Example => {
  let options

  //   If there are style choices, then generate the options for the ComponentPreview
  if (style) {
    const getOptions = <T extends string>(...args: T[]): T[] => args
    options = getOptions<Styles>('base', 'snug')
  }

  const previewComponent = (
    <Button variant={variant} style={style}>
      Button
    </Button>
  )

  // ? Generate the code string for the component
  // ! Change import statement depending on the component
  const importStatement = `import { Button } from '../components/Button' // Change the path depending on where you keep your components\n`
  const codeString = `${importStatement}<Button${variant ? ` variant="${variant}"` : ''}${style ? ` style="${style}"` : ''}>Button</Button>`

  return {
    name,
    previews: {
      component: (
        <ComponentPreview preview={previewComponent} options={options} />
      ),
      code: <CodePreview code={codeString} />,
    },
  }
}

// Generate the examples array
const examples: Example[] = [
  createExample('Primary'),
  // createExample('Secondary', 'secondary'),
  // createExample('Outline', 'outline'),
  // createExample('Ghost', 'ghost'),
  // createExample('Accent', 'accent'),
]

const ButtonDetails: ComponentDetails = {
  overview: {
    title: 'Button',
    description:
      'A clean and simple button component with different variants and styles which you can further customize yourself to your liking.',
  },
  examples: examples,
  code: ComponentCode,
  props: [
    {
      name: 'variant',
      type: 'string',
      default: 'primary',
      description: 'The variant of the button.',
    },
    {
      name: 'style',
      type: 'string',
      default: 'base',
      description: 'The style of the button, either base or snug.',
    },
  ],
}

export default ButtonDetails
