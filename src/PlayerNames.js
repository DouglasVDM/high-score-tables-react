import React from 'react'

let compareDescendingOrder = (object1, object2, key) => {
  const obj1 = Number(object1[key])
  const obj2 = Number(object2[key])

  if (obj1 < obj2) {
    return 1
  }
  if (obj1 > obj2) {
    return -1
  }
  return 0
}

const capitaliseFirstLetter = (string) => (
  string.length ? string.charAt(0).toUpperCase() + string.slice(1) : string
)

function PlayerNames({ Names }) {
  return (
    Names
      .sort((score1, score2) => (
        compareDescendingOrder(score1, score2, "s")
      ))
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
