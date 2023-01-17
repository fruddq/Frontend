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
    <div>
      <button className="create-table-button" onClick={createTable}>
        Create Table
      </button>
      <div className="game-list">
        {tables.map((tableID) => (
          <div key={tableID}>
            Table {tableID} <Link href={`/table/${tableID}`}>Join Table</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
