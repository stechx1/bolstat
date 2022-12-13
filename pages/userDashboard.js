import React from 'react'
import DashboardBox from '../components/DashboardBox'

const UserDashboard = () => {
    return (
        <>
            <div className="mx-3">
                <div className="row flex justify-between">
                    <div className="col-md-4 col-sm-12 flex flex-col ">
                        <div className='flex gap-4 items-center justify-center md:my-0 my-4'>
                            <img src="/Images/bell.png" alt="bell" className='bg-[#C03C3C] pt-[12px] pb-[12px] pl-[18px] pr-[18px] rounded-full' />
                            <span>Winkel niet gekoppeld</span>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 flex gap-4 items-center justify-center md:my-0 my-4">
                        <img src="/Images/bell.png" alt="bell" className='bg-[#C03C3C] pt-[12px] pb-[12px] pl-[18px] pr-[18px] rounded-full' />
                        <span>Abonnement niet actief</span>
                    </div>
                    <div className="col-md-4 col-sm-12 flex gap-4 items-center justify-center md:my-0 my-4">
                        <img src="/Images/bell.png" alt="bell" className='bg-[#C03C3C] pt-[12px] pb-[12px] pl-[18px] pr-[18px] rounded-full' />
                        <span>App toegang</span>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row gap-5">
                    <div className="col-md-4 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5">
                        <div className=''>
                            <h1 className='text-[16px] font-bold text-center my-3'>Bol.com Koppeling</h1>
                            <div className='my-2 mx-2'>
                                <DashboardBox line1={"Koppeling"} line2="NIET GEKOPPELD" />
                            </div>
                            <div className='px-10 text-left'>
                                <span className='text-[#8C8C8C]'>De BolStats app werkt alleen als je jouw bol.com winkel hebt gekoppeld met BolStats.</span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='w-[283.47px] h-[46px] bg-[#3051A3] rounded-xl text-white'>Koppelen</button>
                        </div>
                    </div>
                    <div className="col-md-4 w-[390px] h-[596px] shadow-lg">

                    </div>
                    <div className="col-md-4 w-[390px] h-[596px] shadow-lg">

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
