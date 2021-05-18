import React from 'react'

function PlayerNames({ Names }) {
  return (
    Names.map((el, index) => {
      return (
        <div key={index} style={{ border: "solid .25rem orange" }} className="players">
          <p>{el.n} {el.s}</p>
        </div>
      )
    })
  )
}

export default PlayerNames
