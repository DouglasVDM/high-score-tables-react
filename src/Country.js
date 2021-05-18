import React from 'react'

function Country({ CountryName }) {
  return (
    <div className="country">
      <h3>HIGH SCORES: {CountryName}</h3>
    </div>
  )
}

export default Country
