type Variants = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
type Styles = 'base' | 'snug'

enum styles {
  base = 'transition-colors duration-300 px-3 py-2 text-xs font-medium rounded-md',
  snug = 'transition-colors duration-300 px-3 py-1 text-2xs font-semibold tracking-tight rounded-md',
}

enum variants {
  primary = 'bg-zinc-950 text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300',
  secondary = 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-950',
  outline = 'border-[1.5px] border-zinc-200 hover:bg-zinc-200 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700',
  ghost = 'bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:text-zinc-300',
  accent = 'bg-lime-500 text-lime-950 hover:bg-lime-600',
}

type ButtonProps = {
  variant?: Variants
  style?: Styles
  children: React.ReactNode
}

const Button = ({
  children,
  variant = 'primary',
  style = 'base',
}: ButtonProps) => {
  return (
    <button className={`${variants[variant]} ${styles[style]}`}>
      {children}
      <span className=""></span>
    </button>
    // <button className="">
    //   {children}
    // </button>
  )
}

export default Button
