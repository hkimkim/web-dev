import { useDispatch } from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <>
            <div className="col-3">
                <i className="far fa-comment mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                <span>{tuit.stats.comments}</span>
            </div>

            <div className="col-3">
                <i className="fa fa-retweet mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
                <span>{tuit.stats.retuits}</span>
            </div>

            <div className="col-3">
                {/* <i className="fa fa-heart mx-2" style={{"fontSize":"16px;color:red"}}></i> */}
                <span onClick={likeTuit}>    
                {
                    tuit.liked &&
                    <i className="fa fa-heart mx-2" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="fa fa-heart mx-2" style={({color: 'lightgray'})}></i>
                }
                {tuit.stats && tuit.stats.likes}
                </span>
            </div>

            <div className="col-3">
                <i className="fa fa-share-alt mx-2" style={{"fontSize":"16px;color:lightgray"}}></i>
            </div>
        </>
    );
}
export default TuitStats;