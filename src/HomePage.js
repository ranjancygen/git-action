import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main>
        <h2> Homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to="/todo">Get Todo User</Link>
      </nav>
    </>

  )
}

export default HomePage