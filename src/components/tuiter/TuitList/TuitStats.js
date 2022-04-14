import { useDispatch } from "react-redux";
import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // const likeTuit = () => {
    //     dispatch({type: 'like-tuit', tuit});
    // };
    return (
        <>
            <div className="col-3">
                <i className="far fa-comment mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                <span>{tuit.comments}</span>
            </div>

            <div className="col-3">
                <i className="fa fa-retweet mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                <span>{tuit.retuits}</span>
            </div>

            <div className="col-3">
            <div>
                <span  onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true
                    })} > 
                    {
                        tuit.liked && <i className="fa fa-thumbs-up mx-2" style={({color: 'white'})}> </i>                
                    }
                    {
                        !tuit.liked && <i className="far fa-thumbs-up mx-2"> </i>                
                    }
                    <span>{tuit.likes}</span>
                </span>

            </div>

                {/* <i className="fa fa-heart mx-2" style={{"fontSize":"16px;color:red"}}></i> */}
                {/* <span onClick={likeTuit}>    
                {
                    tuit.liked &&
                    <i className="fa fa-heart mx-2" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="fa fa-heart mx-2" style={({color: 'lightgray'})}></i>
                }
                {tuit.stats && tuit.stats.likes}
                </span> */}
            </div>

            <div className="col-3">
                <i className="fa fa-share-alt mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
            </div>
        </>
    );
}
export default TuitStats;