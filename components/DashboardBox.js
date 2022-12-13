import React from 'react'

const DashboardBox = ({line1, line2}) => {
  return (
    <div className='flex justify-between shadow-lg rounded px-4 py-3'>
      <span>{line1}</span>
      <span>{line2}</span>
    </div>
  )
}

export default DashboardBox
