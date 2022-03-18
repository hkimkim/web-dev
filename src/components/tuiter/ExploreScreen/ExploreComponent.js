import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import './explore.css'

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11">
                    <div className="input-group">
                        <span className="input-group-text bg-light-gray wd-rounded-corners-all-around right-corner-invisible"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control form-control-search wd-rounded-corners-all-around left-corner-invisible" placeholder="Search Tuiter"/>
                    </div>
                </div>

                <div className="col-1">
                    <a href="#"> 
                        <i className="fa fa-cog fa-2x" style={{"color": "rgb(255, 255, 255, 0.829)"}}></i>
                    </a>
                </div>
            </div>
     

            <nav className="navbar navbar-expand">
                <ul className="navbar-nav mt-2">
                    <li className="nav-item pe-5">
                        <a className="nav-link" href="#">For You</a>
                    </li>
                    <li className="nav-item pe-5">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item pe-5">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item pe-5">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item d-sm-none d-md-block active">
                        <a className="nav-link" href="#" tabIndex="-1">Entertainmnet</a>
                    </li>
                </ul>                    
            </nav>


            <div className="card mt-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="card-img-top" alt="..."/>
                <span className="carousel-caption bottom-0 start-0 ps-2">SpaceX's Starship </span>
            </div>
            
           <PostSummaryList/>            
            
        </>

    );
}
export default ExploreComponent;
