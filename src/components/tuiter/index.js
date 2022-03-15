import React from 'react'
import {Link} from 'react-router-dom'
import ExploreScreen from './ExploreScreen/ExploreScreen'

const Tuiter = (who) => {
  return (
      <>

        <ExploreScreen/>
        <h1>Tuiter</h1>
        <Link to="/hello">
            Hello
        </Link> |
        <Link to="/">
            Labs
        </Link>
      </>
  )
}
export default Tuiter