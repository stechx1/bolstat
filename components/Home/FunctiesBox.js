import React from 'react'

const FunctiesBox = ({para}) => {
  return (
    <div className='shadow-lg rounded-[20px] lg:w-7/12 w-full sm:w-10/12 sm:h-[70px] h-[90px] flex items-center justify-center text-center py-2 px-3	'>
      <span className='sm:text-[14px] text-[12px] font-[500]'>{para}</span>
    </div>
  )
}

export default FunctiesBox
