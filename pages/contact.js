import React from 'react'
import Blur from '../components/Blur'
import styles from './auth/Auth.module.css'

const Contact = () => {
  return (
    <>
        <div className='flex md:flex-row flex-col items-center justify-center my-20 gap-5'>
            <div className='flex'>
                <img src="/Images/contact.png" alt="imgs" className='' />
            </div>
            <div className={`flex flex-col items-center rounded-lg  px-4 ${styles.shadow}`}>
                <h1 className='my-4 font-bold text-xl underline'>CONTACT OPNEMEN</h1>
                <label className='my-3' htmlFor="name">Naam</label>
                <input className='bg-[#F0F1F4] w-[400.58px] p-2 h-[43.12px] rounded-md' type="name" name="name" id="name" />
                <label className='my-3' htmlFor="Email">E-mail</label>
                <input className='bg-[#F0F1F4] w-[400.58px] p-2 h-[43.12px] rounded-md' type="email" name="email" id="email" />
                <label className='my-3' htmlFor="Jouw bericht">Jouw bericht</label>
                <textarea style={{resize:"none"}} className='bg-[#F0F1F4] p-2 w-[401px] h-[173px] rounded-md' name="Jouw bericht" id="Jouw bericht" ></textarea>
                <div className='flex flex-col my-5 items-center '>
                    <button className='w-[283.47px] h-[46px] bg-[#3051A3] rounded-3xl text-white'>Verzenden</button>
                    
                </div>
            </div>
        </div>
        <Blur width={'8rem'} height={'28rem'} top={'23%'} left={'94%'} />
        <Blur width={'8rem'} height={'28rem'} top={'60%'} left={'-9%'} />

    </>
  )
}

export default Contact
