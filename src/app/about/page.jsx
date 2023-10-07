"use client"
import Loginregist from "../components/Loginregist"
import AppleCard from "../home/AppleCard"
import AbouSection from "./AbouSection"
import InnerPage from "./InnerPage"
import OurTeam from "./OurTeam"
import Testmonial from "./Testmonial"


const page = () => {
  return (
    <>
       <InnerPage/>
       <AbouSection/>
       <AppleCard />
       <OurTeam/>
       <Testmonial />
       <Loginregist />
    </>
  )
}

export default page
