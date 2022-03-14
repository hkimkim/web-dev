import "../../index.css"
import React from 'react'
import {Link} from 'react-router-dom'
import NavigationSidebar from './NavigationSidebar'
import WhoToFollowList from './WhoToFollowList/WhoToFollowList'

const Tuiter = (who) => {
  return (
      <>
          <NavigationSidebar active="home"/>
          <WhoToFollowList who={who}/>

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

// <div class="row mt-2">
// <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//     ${NavigationSidebar('explore')}
// </div>

// <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 mt-2 mb-4">
//     ${ExploreComponent()}
// </div>

// <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-none d-sm-none d-lg-block mt-2">
//     ${WhoToFollowList()}
// </div>

// </div>