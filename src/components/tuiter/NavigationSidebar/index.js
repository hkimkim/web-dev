import React from "react";


const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <>
            <ul className="list-group list-group-navigation">
                <li className="list-group-item mt-2">
                    <i className="fab fa-twitter fa-1x"></i>
                </li>

                <a href="../HomeScreen/home.html" style={{"textDecoration" : "none"}}>

                    <li className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-1">
                                <i className="fa fa-home"></i>
                            </div>
                            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                                Home
                            </div>
                        </div>
                    </li>
                </a>


                <a href="../ExploreScreen/explore.html" style={{"textDecoration":"none"}}>

                <li className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-hashtag" style={{"color" : "rgb(255, 255, 255)"}}></i>
                        </div>
                        <div className="fg-white fg-style-bold col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                            Explore
                        </div>
                    </div>
                </li>
            </a>


            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-bell"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                        Notifications
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                        Messages
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-bookmark"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                        Bookmarks
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-list"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                        Lists
                    </div>
                </div>
            </li>

            <li className="list-group-item ">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                        Profile
                    </div>
                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <span className="fa-stack fa-1x">
                            <i className="fa fa-circle fa-stack-1x"></i>
                            <i className="fas fa-ellipsis-h fa-stack-1x" style={{"color":"black"}}></i>
                        </span>
                    </div>

                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                        More
                    </div>
                </div>
            </li>
        
        
        <div className="d-grid mt-2">
            <a href="tweet.html" className="btn btn-primary btn-block rounded-pill"> Tweet</a>
        </div>
    
    </ul>
    </>
    );
}
export default NavigationSidebar;
