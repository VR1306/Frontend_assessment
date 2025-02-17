import React from 'react'
import DeviceInformation from './device-information'
import Specifics from './specifics/index';
import Additional from './additional-possibilities';
const Home = () => {
  return (
    <React.Fragment>
      <DeviceInformation/>
      <Specifics/>
      <Additional/>
    </React.Fragment>
  )
}

export default Home