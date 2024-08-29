import React from 'react'

type TabControlBarProps = {
  children: React.ReactNode
}

const TabControlBar = ({ children }: TabControlBarProps) => {
  return (
    <div className="mb-2 flex border-b-[1.5px] border-b-stoke-color">
      {children}
    </div>
  )
}

export default TabControlBar
