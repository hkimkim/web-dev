import "../../index.css"
import React from 'react'
import {Link} from 'react-router-dom'
import NavigationSidebar from './NavigationSidebar'
import WhoToFollowList from './WhoToFollowList/WhoToFollowList'
import PostSummaryList from "./PostSummaryList/PostSummaryList"

const Tuiter = (who) => {
  return (
      <>
          <NavigationSidebar active="home"/>
          <WhoToFollowList who={who}/>
          <PostSummaryList/>

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