const PostSummaryItem = (
    { post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/react-blue.png"
    }
    }) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">

                        <p>
                            {post.topic ? <span className="fg-color-gray">{post.topic}<br></br></span>: ""}
                            
                            <span className="fg-style-bold fg-white ">{post.userName} <i className="fa fa-check-circle"></i></span>
                            <span className="fg-color-gray"> - {post.time}</span><br></br>
                            <span className="fg-style-bold fg-white">{post.title}</span>
                        </p>

                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <img src={post.image} alt="" className="img-fluid post-picture"/>
                    </div>
                </div>
            </li> 

        </>

    );
}
export default PostSummaryItem;