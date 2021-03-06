import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";


const PostSummaryList = () => {
    return (
        <>
        <ul className="list-group list-group-content">
            {
                posts.map( post => { 
                    return (
                        <PostSummaryItem post={post}/>
                    );
                })
            }

        </ul>
        </>    
    );
}
export default PostSummaryList;