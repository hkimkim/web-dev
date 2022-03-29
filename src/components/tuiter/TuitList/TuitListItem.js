import { useDispatch } from "react-redux";
import TuitStats from "./TuitStats";

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
        },
    }
    }) => {
        const dispatch = useDispatch();
        const deleteTuit = (tuit) => {
            dispatch({type: 'delete-tuit', tuit})
        };
    return (
        <>
            <li className="list-group-item post-item-background">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1 text-center">
                    <img src={tuit.logo_image} alt="" className="img-fluid profile-pic"/>
                </div>

                <div className="fg-white col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 mt-1">
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
                        <TuitStats tuit={tuit}/>
                    </div>

                </div>
                <div className="fg-white col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 mt-1">
                    <i onClick= {() => deleteTuit(tuit)} className="fa fa-times" style={{"cursor": "pointer", "fontSize":"16px;color:lightgray"}}></i>
                </div>

            </div>

            </li>
        </>
    );
}

export default TuitListItem;