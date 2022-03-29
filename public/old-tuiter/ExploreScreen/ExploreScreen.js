import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('explore')}
            </div>

            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 mt-2 mb-4">
                ${ExploreComponent()}
            </div>

            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-none d-sm-none d-lg-block mt-2">
                ${WhoToFollowList()}
            </div>

        </div>

    `);
})($);
