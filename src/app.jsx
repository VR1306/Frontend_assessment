import React from 'react'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//App component
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App