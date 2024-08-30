import React, { useState } from 'react'
import { capitalize } from '../utils/capitalize'

type ComponentPreviewProps = {
  preview: React.ReactNode
  options?: Array<string>
}

const ComponentPreview = ({ preview, options }: ComponentPreviewProps) => {
  const [component, setComponent] = useState(preview)

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const selectedStyle = e.currentTarget.value

    if (component) {
      const updatedComponent = React.cloneElement(preview, {
        style: selectedStyle,
      })
      setComponent(updatedComponent)
    }
  }
  return (
    // TODO - Add a way to toggle between styles
    <>
      {options && (
        <select
          className="absolute left-3 top-2 bg-transparent text-xs font-medium outline-white focus-visible:outline-offset-2"
          onChange={(e) => handleChange(e)}
        >
          <optgroup label="Styles">
            {options.map((style, index) => (
              <option key={index} value={style}>
                {capitalize(style)}
              </option>
            ))}
          </optgroup>
        </select>
      )}
      <div className="grid aspect-video place-items-center rounded-md bg-background-card">
        {component}
      </div>
    </>
  )
}

export default ComponentPreview
