const PostSummaryItem = (post) => {
    return (` 
    <li class="list-group-item">
        <div class="row">
            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
            
                <p>
                    ${post.topic ? `<span class="fg-color-gray">${post.topic}</span></br>` : ""}
                   
                    <span class="fg-style-bold fg-white ">${post.userName} <i class="fa fa-check-circle"></span></i></span>
                    <span class="fg-color-gray"> - ${post.time}</span></br>
                    <span class="fg-style-bold fg-white">${post.title}</span>
                </p>
                
            </div>

            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <img src=${post.image} class="img-fluid post-picture">
            </div>

        </div>
    </li> 
    `);
}
export default PostSummaryItem;