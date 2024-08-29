type TabButtonProps = {
  title: string
  handleClick: () => void
  isActive?: boolean
}

const TabButton = ({ title, handleClick, isActive }: TabButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`border-b-[1.5px] border-transparent px-3 py-1 text-xs font-medium text-text-alternate-color transition-colors duration-300 hover:text-text-color ${isActive ? 'border-b-text-color text-text-color' : ''}`}
    >
      {title}
    </button>
  )
}

export default TabButton
