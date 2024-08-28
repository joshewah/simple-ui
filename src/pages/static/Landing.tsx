import { ChevronRight } from 'lucide-react'
import GitHubIcon from '../../assets/github'
import { Link } from 'react-router-dom'
import ComponentPreview from '../../components/ComponentPreview'

const Landing = () => {
  return (
    <main>
      <section className="flex flex-col justify-center gap-4 py-8 md:items-center md:py-16">
        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-6xl md:mb-4 md:max-w-[18ch] md:text-center">
          Reusable, Customisable & Animated Components
        </h1>
        <p className="text-text-secondary-color mb-4 text-xl font-medium md:mb-8 md:max-w-[50ch] md:text-center md:text-2xl">
          Beautifully designed. Open source. React components. That can be
          copied and pasted right into your codebase.
        </p>
        <div className="flex gap-4">
          <Link to="/docs" className="button flex items-center">
            Get Started
            <ChevronRight />
          </Link>
          <Link to="/" className="button light flex items-center gap-2">
            Star on GitHub
            <GitHubIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <section className="flex max-h-full flex-col items-center justify-center gap-12 py-8 md:items-center md:py-16">
        <ComponentPreview />
        <ComponentPreview />
        <Link to="/docs/components">See all components</Link>
      </section>
      {/* Maybe design a section on what pacakges are used*/}
      {/* TODO: Add example components */}
    </main>
  )
}

export default Landing
