import { Link } from 'react-router-dom'
import '../styles/globals.css'
const NotFound = () => {
  return (
    <main className='content'>
      <h1 className='page-heading'>Oops, something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link className='button' to='/'>
        &#8598; Back to Home
      </Link>
      <Link className='button' to='/docs/components'>
        &larr; Back to components
      </Link>
    </main>
  )
}

export default NotFound
