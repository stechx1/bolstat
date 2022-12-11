import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex justify-between px-16 py-12 shadow-md border'>
        <div className='flex justify-between gap-8 w-[60%]'>

          <div className="flex flex-shrink-0 items-center justify-center gap-2">
            <img className="block h-4 w-auto " src="/Images/logo.svg" alt="Logo" />
            <img className="block h-5 mt-1 w-auto " src="/Images/BolStats.png" alt="Name" />
          </div>

          <div className='flex flex-col'>
            <span className='text-xs text-[#bbb9b9] font-bold'> <span className='text-[#808080]'>E:</span> contact@bolstats.nl</span>
            <span className='text-xs text-[#bbb9b9] font-bold'> <span className='text-[#808080]'>REK:</span> NL44 RABO 0369 690125</span>
          </div>

          <div className='flex flex-col'>
            <span className='text-xs text-[#bbb9b9] font-bold'> <span className='text-[#808080]'>KVK:</span> 83295151</span>
            <span className='text-xs text-[#bbb9b9] font-bold'> <span className='text-[#808080]'>BTW:</span> NL003798206B86</span>
          </div>

        </div>
        <div className='flex justify-between w-[20%]'>
          <span className='text-[#A7A7A7] text-xs'>Algemene voorwaarden</span>
          <span className='text-[#A7A7A7] text-xs'>Privacyverklaring</span>
        </div>
      </div>
    </>
  )
}

export default Footer
