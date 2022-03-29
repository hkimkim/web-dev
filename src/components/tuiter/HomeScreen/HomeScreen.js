import React from 'react'
import TuitList from "../TuitList/index"
import WhatsHappening from './WhatsHappening'

const HomeScreen = () => {
  return (
    <div className="row mt-2">
        <WhatsHappening/>
        <TuitList/>
    </div>
  )
}

export default HomeScreen