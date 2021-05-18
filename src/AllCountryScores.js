import React from 'react';
import { Data } from "./Data";

function AllCountryScores() {
  return (
    <div className="page">
      <div className="heading">
        <h1>High Scores per Country</h1>
      </div>
      {Data.map((country) => {
        return (
          <section className="info">            
              <Country CountryName={country.name} style={{ backgroundColor: "red" }} />
              <PlayerNames Names={country.scores} />
          </section>
        )
      })}
    </div>
  )
}

function Country({ CountryName }) {
  return (
    <div className="country">
      <h3>HIGH SCORES: {CountryName}</h3>
    </div>
  )
}

function PlayerNames({ Names }) {
  return(
  Names.map(el => {
    return (
      <div className="players">
        <p>{el.n} {el.s}</p>
      </div>
    )
  })
  )
}

export default AllCountryScores
