import React from 'react';
import { Data } from "./Data";
import Country from "./Country";
import PlayerNames from "./PlayerNames";

function AllCountryScores() {
  return (
    <div style={{ border: "solid .3rem blue" }}>
      <div style={{ border: "solid .3rem red" }} className="heading">
        <h1>High Scores per Country</h1>
      </div>
      {Data.map((country, index) => {
        return (
          <section key={index} style={{ border: ".1rem", padding: "1rem", border: "solid .2rem green" }}className="info">
              <Country CountryName={country.name} style={{ padding: "1rem", backgroundColor: "red" }} />
              <PlayerNames Names={country.scores} />
          </section>
        )
      })}
    </div>
  )
}

export default AllCountryScores
