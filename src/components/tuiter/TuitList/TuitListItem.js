
const TuitListItem = ({
    tuit = {
        _id: "123",
        topic: "Web Development",
        postedBy: {
          username: "ReactJS"
        },
        liked: true,
        verified: false,
        handle: "ReactJS",
        time: "2h",
        title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        attachments: {
          video: "unKvMC3Y1kI"
        },
        logo_image: "../../../images/react-blue.png",
        avatar_image: "../../../images/react-blue.png",
        stats: {
          comments: 123,
          retuits: 234,
          likes: 345
        }
    }
    }) => {
    return (
        <>
            <li className="list-group-item post-item-background">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1 text-center">
                    <img src={tuit.logo_image} alt="" className="img-fluid profile-pic"/>
                </div>

                <div className="fg-white col-xxl-10 col-xl-9 col-lg-10 col-md-10 col-sm-10 mt-1">
                    <p>
                        <span className="fg-style-bold">{tuit.postedBy.username} <i className="fa fa-check-circle"></i></span>
                        <span className="fg-color-gray"> @{tuit.handle}</span>  
                        {/* <span className="fg-color-gray"> - {tuit.time}</span> */}
                        <br></br>
                        {tuit.tuit}
                    </p>   

                    {tuit.attachments ? tuit.attachments.image? 
                    <div className="card post-card mt-2">
                        <img className="card-img-top card-picture" alt="" src={tuit.attachments.image} style={{"borderRadius": "18px"}}/>
                    </div> 
                    :
                    <div className="card post-card mt-2">
                        <iframe height="350em" src={'https://www.youtube.com/embed/' + tuit.attachments.video} style={{"borderRadius": "18px"}}></iframe> 
                   </div> 
                    : ""}

                    <div className="row mt-3 mb-2">

                        <div className="col-3">
                            <i className="far fa-comment mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                            <span>{tuit.stats.comments}</span>
                        </div>

                        <div className="col-3">
                            <i className="fa fa-retweet mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                            <span>{tuit.stats.retuits}</span>
                        </div>

                        <div className="col-3">
                            <i className="fa fa-heart mx-2" style={{"fontSize":"16px;color:red"}}></i>
                            <span>{tuit.stats.likes}</span>
                        </div>

                        <div className="col-3">
                            <i className="fa fa-share-alt mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                        </div>

                    </div>

                </div>
            </div>

            </li>
        </>
    );
}

export default TuitListItem;