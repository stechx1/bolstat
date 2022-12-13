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

            {/* FIRST ROW */}

            <div className="container my-5">
                <div className="row gap-5 items-center justify-center">

                    <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
                        <div className=''>
                            <h1 className='text-[16px] font-bold text-center my-3'>Bol.com Koppeling</h1>
                            <div className='my-2 mx-2'>
                                <DashboardBox line1={"Koppeling"} line2="NIET GEKOPPELD" />
                            </div>
                            <div className='pl-10 pr-24 py-2 text-left text-xs' style={{ lineHeight: '1' }}>
                                <span className='text-[#8C8C8C]'>De BolStats app werkt alleen als je jouw bol.com winkel hebt gekoppeld met BolStats.</span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='w-full lg:w-[138px]  h-[46px] bg-[#3051A3] rounded-xl text-white text-[20px] font-semibold'>Koppelen</button>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
                        <div className=''>
                            <h1 className='text-[16px] font-bold text-center my-3'>Abonnement</h1>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Abonnement"} line2="ACTIEF" />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Prijs"} line2="€8,00- exc. btw" />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Volgende betaling"} line2="01-11-2022" />
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='w-full lg:w-[138px] h-[46px] bg-[#A33030] rounded-xl text-white text-[20px] font-semibold'>Opzeggen</button>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
                        <div className=''>
                            <h1 className='text-[16px] font-bold text-center my-3'>App Instellingen</h1>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Face ID voor toegang"} check={true} />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Notificatie bij nieuwe bestelling"} check={true} />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Notificatie bij nieuwe retour"} check={true} />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Notificatie bij lage voorraad"} check={true} />
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='w-full lg:w-[138px] h-[46px] bg-[#387A47] rounded-xl text-white text-[20px] font-semibold'>Opslaan</button>
                        </div>
                    </div>
                </div>

                {/* SECOND ROW */}

                <div className="row gap-5 my-10">
                    <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 rounded">
                        <div className=''>
                            <h1 className='text-[16px] font-bold text-center my-3'>Gebruikersinstellingen</h1>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Bedrijfsnaam"} line2="ACTIEF" />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Naam"} line2="€8,00- exc. btw" />
                            </div>
                            <div className='my-3 mx-2'>
                                <DashboardBox line1={"Email"} line2="01-11-2022" />
                            </div>


                        </div>
                        <div className='flex justify-center items-center' style={{ lineHeight: '0px' }}>
                            <div className='px-10 text-left'>
                                <span className='text-[#8C8C8C] text-xs'>Deze gegevens kun je op dit moment alleen wijzigen door een mail te sturen naar <br />contact@bolstats.nl.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 w-[390px] h-[596px] shadow-lg d-flex flex-col justify-between py-5 px-4 rounded">
                        <div className=''>
                            <h1 className='text-[16px] font-bold text-center my-3'>Wachtwoord veranderen</h1>
                            <div className='my-3 mx-2 flex flex-col text-center'>
                                <label className='my-3' htmlFor="Email">Email</label>
                                <input className='bg-[#F0F1F4] p-2 h-[43.12px] rounded-md' type="email" name="email" id="email" />
                                <label className='my-3' htmlFor="password">Wachtwoord</label>
                                <input className='bg-[#F0F1F4] p-2  h-[43.12px] rounded-md' type="password" name="password" id="password" />
                            </div>


                        </div>
                        <div className='flex justify-center items-center'>
                            <button className=' w-full lg:w-[138px] h-[39px] bg-[#387A47] rounded-xl text-white text-[20px] font-semibold'>Opslaan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
