import WhoToFollowListItem from "./ListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
        <ul class="list-group list-group-follow-suggestion">
            <li class="fg-white list-group-item fg-style-bold tuiter-challenge-background">
                Who to Follow
            </li>
            ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
        `);
} 
export default WhoToFollowList;