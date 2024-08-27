import { useState, useRef } from 'react'

const Accordion = () => {
  return (
    <div>
      <AccordionItem
        title='Is it accessible?'
        description='Yes. It adheres to the WAI-ARIA design pattern.'
      />
      <AccordionItem
        title='Is it accessible?'
        description='Yes. It adheres to the WAI-ARIA design pattern.'
      />
    </div>
  )
}

const AccordionItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className='accordion-item'>
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className='accordion-trigger'
      >
        <span className='accordion-title'>{title}</span>
        <span className='accordion-icon'>+</span>
      </div>

      <div ref={ref} className={`accordion-content${isOpen ? '' : ' hidden'}`}>
        {description}
      </div>
    </div>
  )
}

export default Accordion
