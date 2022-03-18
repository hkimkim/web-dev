import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import HomeComponent from "./HomeComponent.js";

import React from 'react'

const HomeScreen = () => {
  return (
    <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active='home'/>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 mt-2 mb-4">
                <HomeComponent/>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-none d-sm-none d-lg-block mt-2">
                <li className="fg-white list-group-item fg-style-bold" style={{"background":"transparent"}}>
                    Post Summary
                </li>
                <PostSummaryList/>
            </div>
        </div>
  )
}

export default HomeScreen