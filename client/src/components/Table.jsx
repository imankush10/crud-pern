import React from 'react'
import TableRow from './TableRow'

export const Table = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
        <th>Rate</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <TableRow/>
      {/* row 2 */}
      <TableRow/>
      {/* row 3 */}
      <TableRow/>
    </tbody>
  </table>
</div>
  )
}
