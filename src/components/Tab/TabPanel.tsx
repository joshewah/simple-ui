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
          ? 'bg-background-card border-stoke-color grid min-h-56 place-items-center rounded-md border-[1.5px]'
          : ''
      }
    >
      {component}
    </div>
  )
}

export default TabPanel
