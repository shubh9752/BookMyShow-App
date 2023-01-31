import React from 'react'
import Navbar from '../components/Navbar/NavbarComponent'

const DefaultHoc = (Component) =>({...props})=> {
  return (
    <div>
        <Navbar/>
        <Component {...props}/>
    </div>
  )
}

export default DefaultHoc