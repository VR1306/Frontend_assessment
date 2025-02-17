import React from 'react'
import DeviceInformation from './device-information'
import Specifics from './specifics/index';
import Additional from './additional-possibilities';
import Platforms from './platforms';
const Home = () => {
  return (
    <React.Fragment>
      <DeviceInformation/>
      <Specifics/>
      <Additional/>
      <Platforms/>
    </React.Fragment>
  )
}

export default Home