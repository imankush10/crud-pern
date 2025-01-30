import React from 'react'

const TableRow = () => {
  return (
    <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>300</td>
        <td><button className="btn btn-dash btn-success rounded-4xl">Active</button></td>
        <td><button className="btn btn-soft btn-info rounded-md">Update</button></td>
        <td><button className="btn btn-soft btn-error rounded-md">Remove</button></td>
      </tr>
  )
}

export default TableRow