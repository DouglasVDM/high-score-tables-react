import React from 'react'

function PlayerNames({ Names, sortOrder }) {

  const capitaliseFirstLetter = (string) => (
    string.length ? string.charAt(0).toUpperCase() + string.slice(1) : string
  )


  const sortItems = (object1, object2, key, ascending = true) => {
    const obj1 = Number(object1[key])
    const obj2 = Number(object2[key])

    if (obj1 < obj2) {
      return ascending ? -1 : 1
    }
    if (obj1 > obj2) {
      return ascending ? 1 : -1
    }
    return 0
  }
   
  return (
    Names.sort((score1, score2) => (
      sortItems(score1, score2, "s", sortOrder)))
        
      .map((el, index) => (
        <div
          key={index}
          style={{ border: "solid .1rem orange" }}
          className="players">
          <p>{capitaliseFirstLetter( el.n )} {el.s}</p>          
        </div>
      )
    )
  )
}

export default PlayerNames
