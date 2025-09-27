import React from 'react'

import Hero from './components/Hero'
import LatestCollection from './components/LatestCollection'
import BestSeller from './components/BestSeller'
import OurPolicy from './components/OurPolicy'
import Newsletterbox from './components/Newsletterbox'


const page = () => {
  return (
    <>  
  
      {/* <Navbar/> */}
       <Hero/>
<LatestCollection/>
<BestSeller/>
<OurPolicy/>
<Newsletterbox/>




       


      </>
      
    
  )
}

export default page
