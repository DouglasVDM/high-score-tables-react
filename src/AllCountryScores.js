import React from 'react';
import { Data } from "./Data";
import Country from "./Country";
import PlayerNames from "./PlayerNames";

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

export default AllCountryScores
