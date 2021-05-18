import React from 'react'

function Country({ CountryName }) {
  return (
    <div style={{ border: "solid .25rem orange" }} className="country">
      <h3>HIGH SCORES: {CountryName}</h3>
    </div>
  )
}

export default Country
