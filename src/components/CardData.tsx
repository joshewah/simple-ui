import Card, { Variants, Styles } from './Card' // ? Import the component & the types needed
import ComponentCode from './Card?raw' // ? Gets the raw code of the component
import { ComponentDetails } from '../pages/ComponentDetails' // ? Make sure the type is correct for displaying component

// ? Components need to display the component, and code
import ComponentPreview from './ComponentPreview'
import CodePreview from './CodePreview'

import { PencilLine } from 'lucide-react'

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
  description?: string | null, // ? Optional description if more info is required
  variant?: Variants,
  style?: Styles,
): Example => {
  const previewComponent = (
    <Card
      variant={variant}
      title="Hello World"
      description="lorem ipsum dolor sit amet."
      icon={PencilLine}
    />
  )

  // ? Generate the code string for the component
  //   ! Change import statement depending on the component
  const importStatement = `import { Card } from '../components/Card' // Change the path depending on where you keep your components\nimport { PencilLine } from 'lucide-react' // your icon\n\n`
  const codeString = `${importStatement}<Card${variant ? `\n\tvariant="${variant}"` : ''}\n\ttitle="TITLE"\n\tdescription="DESCRIPTION"\n\ticon={PencilLine}\n/>`

  return {
    name,
    previews: {
      component: <ComponentPreview preview={previewComponent} />,
      code: <CodePreview code={codeString} />,
    },
  }
}

// Generate the examples array
const examples: Example[] = [
  createExample('Outline'),
  createExample('Filled', null, 'filled'),
]

console.log(examples)

const CardData: ComponentDetails = {
  overview: {
    title: 'Card',
    description:
      'A simple yet eye catching card component with different variants which include color options.',
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

export default CardData
