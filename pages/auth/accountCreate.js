import React from 'react'
import styles from './Auth.module.css'

const AccountCreate = () => {
    return (
        <div className='flex items-center justify-center my-3'>
            <div className={`flex flex-col items-center rounded-lg px-4 ${styles.shadow}`}>
                <h1 className='my-4 font-bold text-xl underline'>ACCOUNT AANMAKEN</h1>
                <label className='my-3 underline' htmlFor="name">Naam</label>
                <input className='bg-[#F0F1F4] p-2 md:w-[400.58px] h-[43.12px] rounded-md w-full' type="text" name="name" id="name" />
                <label className='my-3 underline' htmlFor="Email">Email</label>
                <input className='bg-[#F0F1F4] p-2 md:w-[400.58px] h-[43.12px] rounded-md w-full' type="email" name="email" id="email" />
                <label className='my-3 underline' htmlFor="password">Wachtwoord</label>
                <input className='bg-[#F0F1F4] p-2 md:w-[400.58px] h-[43.12px] rounded-md w-full' type="password" name="password" id="password" />
                <div className='flex flex-col mt-44 mb-12 items-center '>
                    <button className='w-[283.47px] h-[46px] bg-[#3051A3] rounded-3xl text-white'>ACCOUNT AANMAKEN</button>
                </div>
            </div>
        </div>
    )
}

export default AccountCreate
