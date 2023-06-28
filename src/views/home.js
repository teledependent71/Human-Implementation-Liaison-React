import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Implementation Liaison</title>
        <meta property="og:title" content="Human Implementation Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
