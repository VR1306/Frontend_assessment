import React from 'react'
import DeviceInformation from './device-information'
import Specifics from './specifics/index';
const Home = () => {
  return (
    <React.Fragment>
      <DeviceInformation/>
      <Specifics/>
    </React.Fragment>
  )
}

export default Home