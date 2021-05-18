import React from 'react'

function PlayerNames({ Names }) {
  return (
    Names.map((el, index) => {
      return (
        <div key={index} className="players">
          <p>{el.n} {el.s}</p>
        </div>
      )
    })
  )
}

export default PlayerNames
