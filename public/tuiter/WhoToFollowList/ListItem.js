const WhoToFollowListItem = (who) => {
    return (
        `
        <li class="list-group-item">
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-4 d-md-none d-lg-block mt-1 text-center">
                    <img src=${who.avatarIcon} class="img-fluid profile-pic">
                </div>

                <div class="fg-white col-xxl-6 col-xl-6 col-lg-4 mt-1">
                    <p>
                        <span class="fg-style-bold">${who.userName} <i class="fa fa-check-circle"></i></span>
                        </br>
                        <span class="fg-light-gray">@${who.handle}</span>                    
                    </p>    
                </div>

                <div class="col-xxl-3 col-xl-3 col-lg-3 pull-right">
                    <button type="submit" class="rounded-pill btn btn-primary mt-2 follow-btn-margin">Follow</button>
                </div>

            </div>
        </li>
        `);
}
export default WhoToFollowListItem;