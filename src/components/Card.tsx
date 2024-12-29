export type Variants = 'outline' | 'filled'
export type Styles = null

enum variants {
  outline = 'border-2 border-zinc-200 rounded-md p-3',
  filled = 'bg-zinc-200 rounded-md p-3',
}

type CardProps = {
  variant?: Variants
  title: string
  description: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const Card = ({
  title,
  description,
  icon: Icon,
  variant = 'outline',
}: CardProps) => {
  return (
    <div className={`${variants[variant]} flex items-start gap-2`}>
      <>
        <CardIcon icon={Icon} />
      </>
      <div className="flex max-w-40 flex-col flex-wrap">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </div>
  )
}

const CardTitle = ({ children }: { children: string }) => {
  return (
    <h4 className="mb-0 text-lg font-semibold tracking-tight text-zinc-950">
      {/* TODO: make colours dynamic */}
      {children}
    </h4>
  )
}

const CardDescription = ({ children }: { children: string }) => {
  return <p className="font-base text-wrap text-xs text-zinc-500">{children}</p>
}

const CardIcon = ({
  icon: Icon,
}: {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}) => {
  return (
    <div className="icon-class">
      <Icon width={18} height={18} />
    </div>
  )
}

export default Card
