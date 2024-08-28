import TabControlBar from './TabControlBar'
import TabButton from './TabButton'
import TabContent from './TabContent'
import TabPanel from './TabPanel'
import { useState, useEffect } from 'react'

type TabProps = {
  componentPreview: React.ReactNode
  codePreview: React.ReactNode
}

const Tab = ({ componentPreview, codePreview }: TabProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  useEffect(() => {
    setActiveTab('preview')
  }, [])

  return (
    <pre className="mb-6">
      <TabControlBar>
        <TabButton
          title="Preview"
          handleClick={() => setActiveTab('preview')}
          isActive={activeTab === 'preview'}
        />
        <TabButton
          title="Code"
          handleClick={() => setActiveTab('code')}
          isActive={activeTab === 'code'}
        />
      </TabControlBar>
      <TabContent maxHeight={100}>
        {activeTab === 'preview' ? (
          <TabPanel component={componentPreview} background={true} />
        ) : (
          <TabPanel component={codePreview} />
        )}
      </TabContent>
    </pre>
  )
}

export default Tab
