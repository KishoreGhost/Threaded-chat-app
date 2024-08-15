import React from 'react'
import LandingPage1 from '../LandingPage1'
import LandingPage2 from '../LandingPage2'
import LandingPage3 from '../LandingPage3'
import LandingPage4 from '../LandingPage4'
import LandingPage5 from '../LandingPage5'

const LandingPage = () => {
  return (
    <>
    <div className='w-full min-h-screen'>
        <LandingPage1 />
        <LandingPage2 />    
        <LandingPage3 />
        <LandingPage4 />
        <LandingPage5 />
    </div>
    </>
  )
}

export default LandingPage