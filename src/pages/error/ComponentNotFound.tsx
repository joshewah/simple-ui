import { useState, useEffect } from 'react'
import NotFound from './NotFound'

const ComponentNotFound = () => {
  const [show, setShow] = useState(false)
  const delay = 500

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!show) {
    return null
  }

  return <NotFound />
}

export default ComponentNotFound
