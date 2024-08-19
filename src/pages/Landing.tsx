import { Link } from 'react-router-dom'
import './../styles/Landing.css'

const Landing = () => {
  return (
    <main className='container'>
      <section className='landing-section'>
        <h1 className='heading'>UI Components for Frontend Enthusiasts</h1>
        <p className='sub-heading'>
          A collection of reusable UI components for React and vanilla code
          bases.
        </p>
        <div className='cta-buttons'>
          <Link to='/docs/components' className='cta-button'>
            Browse Components
          </Link>
          <Link to='/docs' className='cta-button secondary'>
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Landing
