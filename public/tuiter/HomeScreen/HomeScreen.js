import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import HomeComponent from "./HomeComponent.js";
(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
            </div>

            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 mt-2 mb-4">
                ${HomeComponent()}
            </div>

            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-none d-sm-none d-lg-block mt-2">
                <li class="fg-white list-group-item fg-style-bold" style="background:transparent">
                    Post Summary
                </li>
                ${PostSummaryList()}
            </div>
        </div>
    `)

})($);