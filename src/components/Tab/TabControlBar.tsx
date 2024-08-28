import React from 'react'

type TabControlBarProps = {
  children: React.ReactNode
}

const TabControlBar = ({ children }: TabControlBarProps) => {
  return (
    <div className="border-b-stoke-color mb-2 flex border-b-[1.5px]">
      {children}
    </div>
  )
}

export default TabControlBar
