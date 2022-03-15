const PostItem = (
    {
        post = {
            "profileImg": "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
            "author": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tuit": "Amazing show about <a href='https://twitter.com/inspiration4x' style='text-decoration:none'>@Inspiration4x</a> mission!",
            "postImg": "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Offical Site",
            "summary": "From traing to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...\n netflix.com",
            "commentCount": "4.2K",
            "retweetCount": "3.5K",
            "likeCount": "37.5K"
        }
    }) => {
    return (
        <>
        <li className="list-group-item post-item-background">
        <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1 text-center">
                <img src={post.profileImg} alt="" className="img-fluid profile-pic"/>
            </div>

            <div className="fg-white col-xxl-10 col-xl-9 col-lg-10 col-md-10 col-sm-10 mt-1 px-1">
                <p>
                    <span className="fg-style-bold">{post.author} <i className="fa fa-check-circle"></i></span>
                    <span className="fg-color-gray">@{post.handle}</span>  
                    <span className="fg-color-gray"> - {post.time}</span>
                    <br></br>
                    {post.tuit}
                </p>   

                <div className="card post-card mt-2">

                    <img className="card-img-top card-picture" alt="" src={post.postImg} style={{"border-radius": "18px"}}/>
                    
                    {post.title && post.summary ?                      
                        <div className="card-body">
                            {post.title ? <h6 className="card-title">{post.title}</h6>: ""}
                            {post.summary ? <p className="card-text fg-color-gray">{post.summary}</p>: ""}
                        </div> 
                        
                        : ""
                    }

                </div>

                <div className="row mt-3 mb-2">
                    <div className="col-3">
                        <i className="far fa-comment mx-2" style={{"font-size":"16px;color:lightgray"}}></i>
                        <span>{post.commentCount}</span>
                    </div>

                    <div className="col-3">
                        <i className="fa fa-retweet mx-2" style={{"font-size":"16px;color:lightgray"}}></i>
                        <span>{post.retweetCount}</span>
                    </div>

                    <div className="col-3">
                        <i className="fa fa-heart mx-2" style={{"font-size":"16px;color:red"}}></i>
                        <span>{post.likeCount}</span>
                    </div>

                    <div className="col-3">
                        <i className="fa fa-share-alt mx-2" style={{"font-size":"16px;color:lightgray"}}></i>
                    </div>
                </div>

            </div>
        </div>

        </li>
    </>
    );
} 
export default PostItem;