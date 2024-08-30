import React from 'react'

type TabPanelProps = {
  component: React.ReactNode
  background?: boolean
}

const TabPanel = ({ component, background }: TabPanelProps) => {
  return (
    <div
      className={
        background
          ? 'relative grid min-h-56 place-items-center rounded-md border-[1.5px] border-stoke-color bg-background-card'
          : ''
      }
    >
      {component}
    </div>
  )
}

export default TabPanel
