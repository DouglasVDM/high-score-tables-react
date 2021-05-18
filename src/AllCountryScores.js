import React from 'react';
import { Data } from "./Data";
import Country from "./Country";
import PlayerNames from "./PlayerNames";

function AllCountryScores() {
  return (
    <div style={{ border: "solid .5rem blue" }}>
      <div style={{ border: "solid .5rem red" }} className="heading">
        <h1>High Scores per Country</h1>
      </div>
      {Data.map((country, index) => {
        return (
          <section key={index} style={{ border: "solid .25rem green" }}className="info">
              <Country CountryName={country.name} style={{ backgroundColor: "red" }} />
              <PlayerNames Names={country.scores} />
          </section>
        )
      })}
    </div>
  )
}

export default AllCountryScores
