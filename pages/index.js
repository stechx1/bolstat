import Head from 'next/head'
import Image from 'next/image'
import FeatureBox from '../components/FeatureBox'
import styles from '../styles/Home.module.css'
import HomeComponent from '../components/Home/HomeComponent'
import ReviewPanel from '../components/Home/ReviewPanel'
import Functies from '../components/Home/Functies'
export default function Home() {
  return (
    <>
      <div className='my-6 mx-16'>
        <FeatureBox para1={'Al jouw statistieken op één plek'} para2={`De BolStats IOS app geeft je inzicht in jouw online bol.com br business. BolStats is een betaalbare app om je bedrijf te volgen.`} image="/Images/Home/home.svg" />
      </div>


      <HomeComponent/>

      <ReviewPanel/>

      <Functies />

      <div className="my-6 text-center">
        <span className=' text-[23px] text-gray-200'>© Copyright 2023 bolstats.nl, alle rechten voorbehouden</span>
      </div>
    </>
  )
}
