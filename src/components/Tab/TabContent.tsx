import React from 'react'

type TabContentProps = {
  children: React.ReactNode
  maxHeight?: number
}

const TabContent = ({ children, maxHeight }: TabContentProps) => {
  console.log(maxHeight)
  maxHeight = maxHeight || 0
  const tabContentStyles = `${maxHeight ? `max-h-${maxHeight}px` : ''}`

  return <div className={tabContentStyles}>{children}</div>
}

export default TabContent
