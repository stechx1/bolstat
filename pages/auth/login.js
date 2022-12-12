import React from 'react'
import styles from './Auth.module.css'

const Login = () => {
  return (
    <>
        <div className='flex md:flex-row flex-col items-center justify-center my-20 gap-5'>
            <div className='flex'>
                <img src="/Images/Capture.png" alt="imgs" className='lg:h-[480px]' />
            </div>
            <div className={`flex flex-col items-center rounded-lg px-4 ${styles.shadow}`}>
                <h1 className='my-4 font-bold text-xl underline'>INLOGGEN BIJ BOLSTATS</h1>
                <label className='my-3' htmlFor="Email">Email</label>
                <input className='bg-[#F0F1F4] p-2 lg:w-[400.58px] h-[43.12px] rounded-md' type="email" name="email" id="email" />
                <label className='my-3' htmlFor="password">Wachtwoord</label>
                <input className='bg-[#F0F1F4] p-2 lg:w-[400.58px] h-[43.12px] rounded-md' type="password" name="password" id="password" />
                <div className='flex flex-col my-5 items-center '>
                    <button className='lg:w-[283.47px] lg:h-[46px] w-full  bg-[#3051A3] rounded-3xl text-white'>INLOGGEN</button>
                    <span className='text-sm font-medium mt-3'>Geen account? <span className='text-[#3051A3]'>Maak er een aan.</span></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
