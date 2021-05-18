import React from 'react'

function PlayerNames({ Names }) {
  return (
    Names.map(el => {
      return (
        <div className="players">
          <p>{el.n} {el.s}</p>
        </div>
      )
    })
  )
}

export default PlayerNames
