import React from 'react'

type ComponentPreviewProps = {
  preview: React.ReactNode
  options?: {
    style: Array<string>
  }
}

const ComponentPreview = ({
  preview: component,
  options,
}: ComponentPreviewProps) => {
  return (
    // TODO - Add a way to toggle between styles
    <>
      {options && (
        <select className="absolute left-3 top-2 bg-background-card text-xs">
          <option value="styles">Styles</option>
          {options.style.map((style, index) => (
            <option key={index} value={style}>
              {style}
            </option>
          ))}
        </select>
      )}
      <div className="grid aspect-video place-items-center rounded-md bg-background-card">
        {component}
      </div>
    </>
  )
}

export default ComponentPreview
