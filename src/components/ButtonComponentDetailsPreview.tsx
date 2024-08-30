import Button, { Variants, Styles } from './Button'
import ComponentCode from './Button?raw'
import ComponentPreview from './ComponentPreview'
import CodePreview from './CodePreview'
import { ComponentDetails } from '../pages/ComponentDetails'

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
  variant?: Variants,
  style?: Styles,
): Example => {
  const getOptions = <T extends string>(...args: T[]): T[] => args
  const options = getOptions<Styles>('base', 'snug')

  const codeString = `<Button${variant ? ` variant="${variant}"` : ''}${style ? ` style="${style}"` : ''}>Button</Button>`
  const previewComponent = (
    <Button variant={variant} style={style}>
      Button
    </Button>
  )

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
  createExample('Secondary', 'secondary'),
  createExample('Outline', 'outline'),
  createExample('Ghost', 'ghost'),
  createExample('Accent', 'accent'),
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
