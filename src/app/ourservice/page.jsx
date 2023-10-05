import RegisterAs from '../home/RegisterAs'
import InnerService from './InnerService'
import ServiceCard from './ServiceCard'

const page = () => {
  return (
    <>
      <InnerService />
      <ServiceCard />
      <RegisterAs />
    </>
  )
}

export default page
