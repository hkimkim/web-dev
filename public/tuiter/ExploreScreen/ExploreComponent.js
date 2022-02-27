import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="input-group">
                        <span class="input-group-text bg-light-gray wd-rounded-corners-all-around right-corner-invisible"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control form-control-search wd-rounded-corners-all-around left-corner-invisible" placeholder="Search Tuiter">
                    </div>
                </div>

                <div class="col-1">
                    <a href="#">
                        <i class="fa fa-cog fa-2x" style="color: rgba(255, 255, 255, 0.829)"></i>
                    </a>
                </div>
            </div>
     

            <nav class="navbar navbar-expand">
                <ul class="navbar-nav mt-2">
                    <li class="nav-item pe-5">
                        <a class="nav-link" href="#">For You</a>
                    </li>
                    <li class="nav-item pe-5">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item pe-5">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item pe-5">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-sm-none d-md-block active">
                        <a class="nav-link" href="#" tabindex="-1">Entertainmnet</a>
                    </li>
                </ul>                    
            </nav>


            <div class="card mt-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="card-img-top" alt="...">
                <span class="carousel-caption bottom-0 start-0 ps-2">SpaceX's Starship </span>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
