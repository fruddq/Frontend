import React, { useState } from 'react'
import { Link } from 'wouter'

//TODO
//TableID needs a real ID
// TABLE NEEDS A NAME!!!
//save ID in a DB and not an array
export const GameList: React.FunctionComponent = () => {
  const [tables, setTables] = useState<number[]>([])

  const createTable = () => {
    const tableID: number = tables.length + 1

    //fetch('',{update})
    setTables([...tables, tableID])
  }

  return (
    <section className="create-table">
      <button className="create-table-button" onClick={createTable}>
        Create Table
      </button>
      <article className="game-list">
        <h2 className="game-list-title">Current Games</h2>
        {tables.map((tableID) => (
          <div className="created-table" key={tableID}>
            Table {tableID}:<Link className="crated-table-link" href={`/table/${tableID}`}> Join Table</Link>
          </div>
        ))}
      </article>
    </section>
  )
}
