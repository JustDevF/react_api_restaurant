import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! Cette page n'existe pas</h1>
        {/*Lien pour retourner à la page d'accueil */}
        <Link to="/" className="btn btn-pramary">
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error