import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <h1>Oops, the page you are looking for does not seem to exist.</h1>
      <Link to='/'>Go back to home</Link>
    </>
  )
}

export default NotFound
