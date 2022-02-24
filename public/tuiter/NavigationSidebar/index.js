const NavigationSidebar = () => {
    return(`
    <ul class="list-group list-group-navigation">
        <li class="list-group-item">
            <i class="fab fa-twitter fa-1x" ></i>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-home"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Home
                </div>
            </div>
        </li>

        <li class="list-group-item active">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-hashtag" style="color: rgb(255, 255, 255)"></i>
                </div>
                <div class="fg-white fg-style-bold col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Explore
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-bell"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Notifications
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Messages
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-bookmark"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Bookmarks
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-list"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Lists
                </div>
            </div>
        </li>

        <li class="list-group-item ">
            <div class="row">
                <div class="col-1">
                    <i class="fa fa-user"></i>
                </div>
                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    Profile
                </div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <span class="fa-stack fa-1x" >
                        <i class="fa fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x"></i>
                    </span>    
                </div>

                <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none">
                    More
                </div>
            </div>
        </li>
    </ul>

        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;
