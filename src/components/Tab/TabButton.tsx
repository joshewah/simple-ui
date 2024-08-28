type TabButtonProps = {
  title: string
  handleClick: () => void
  isActive?: boolean
}

const TabButton = ({ title, handleClick, isActive }: TabButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`text-text-alternate-color hover:text-text-color border-b-[1.5px] border-transparent px-3 py-1 text-sm transition-colors duration-300 ${isActive ? 'text-text-color border-b-text-color' : ''}`}
    >
      {title}
    </button>
  )
}

export default TabButton
