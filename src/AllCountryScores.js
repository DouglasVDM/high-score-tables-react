import React, { useState } from 'react';
import { Data } from "./Data";
import Country from "./Country";
import PlayerNames from "./PlayerNames";

function AllCountryScores() {

  const[sortOrder, setSortOrder] = useState(false)

  let compareDescendingOrder = (object1, object2) => {
    const obj1 = object1
    const obj2 = object2

    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
  }


  const handleToggle = () => {
    setSortOrder(!sortOrder)
  }


  return (
    <div style={{ border: "solid .3rem blue" }}>
      
      <div style={{ border: "solid .3rem red" }} className="heading">
        
        <button onClick={handleToggle}>Toggle Sort Scores</button>

        <h1>High Scores per Country</h1>
      </div>

      {Data
        .sort((name1, name2) => compareDescendingOrder(name1.name, name2.name)    
        )
        .map((country, index) => {
        return (
          <section key={index} style={{ padding: "1rem", border: "solid .2rem green" }}className="info">
              <Country CountryName={country.name} style={{ padding: "1rem", backgroundColor: "red" }} />
              <PlayerNames sortOrder={sortOrder} Names={country.scores} />
          </section>
        )
      })}
    </div>
  )
}

export default AllCountryScores
