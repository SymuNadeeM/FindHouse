import AppleCard from './AppleCard'
import Articals from './Articals'
import Partner from './Partner'
import RegisterAs from './RegisterAs'
import Banner from './banner/Banner'
import Features from './featured/Features'
import Properties from './properties/Properties'

export default function HomePage() {
  return (
    <>
      <Banner/>
      <Features/>
      <Properties />
      <AppleCard />
      <Articals/>
      <Partner/>
      <RegisterAs/>
      
    </>
  )
}
