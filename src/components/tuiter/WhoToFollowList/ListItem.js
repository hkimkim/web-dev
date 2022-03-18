const WhoToFollowListItem = (        {
    who = {
        avatarIcon: '../../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 d-md-none d-lg-block mt-1 text-center">
                        <img src={who.avatarIcon} alt="" className="img-fluid profile-pic"/>
                    </div>

                    <div className="fg-white col-xxl-6 col-xl-6 col-lg-4 mt-1">
                        <p>
                            <span className="fg-style-bold">{who.userName} <i className="fa fa-check-circle"></i></span>
                            <br></br>
                            <span className="fg-light-gray">@{who.handle}</span>                    
                        </p>    
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-3 pull-right">
                        <button type="submit" className="rounded-pill btn btn-primary mt-2 follow-btn-margin">Follow</button>
                    </div>

                </div>
            </li>
        </>
        );
}
export default WhoToFollowListItem;