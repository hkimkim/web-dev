import NavigationSidebar from "../NavigationSidebar/index.js";
// import ExploreComponent from "./ExploreComponent.js";
// import WhoToFollowList from "../WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
        </div>
    `);
})($);


// <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
// ${ExploreComponent()}
// </div>
// <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
// ${WhoToFollowList()}
// </div>