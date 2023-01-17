import React from 'react'
import { Link } from 'wouter'

export const Table: React.FunctionComponent<{
  tableID: number
}> = ({ tableID }) => (
  <div>
    This is Table:{tableID}
    <br />
    <Link href="/">To Home</Link>
  </div>
)
