import WhoToFollowListItem from "./ListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <>
            <ul className="list-group list-group-follow-suggestion">
                <li className="fg-white list-group-item fg-style-bold tuiter-challenge-background">
                    Who to Follow
                </li>
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </ul>
        </>
        );
        
} 
export default WhoToFollowList;