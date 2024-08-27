import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className="container">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          UI Components for Frontend Enthusiasts
        </h1>
        <p className="text-xl font-medium">
          A collection of reusable UI components for React and vanilla code
          bases.
        </p>
        <div className="flex gap-4">
          <Link
            to="/docs/components"
            className="rounded-md bg-black px-4 py-2 text-base font-medium text-white"
          >
            Browse Components
          </Link>
          <Link
            to="/docs"
            className="rounded-md bg-white px-4 py-2 text-base font-medium text-black"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Landing
