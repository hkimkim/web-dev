import { useSelector } from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
        <div>
            <div className="header">
                <div className="row p-2">
                    <div className="col-1">
                        <i className="fa fa-arrow-left"></i>
                    </div>

                    <div className="col-9">
                        <h5 className="mb-0 pb-0 fw-bolder">
                        {profile.firstName}
                        </h5>
                        <span >{profile.tuits} tuits</span>
                    </div>
                </div>
            </div>

            <div className="mb-5 position-relative">
            <img className="w-100" alt="" src={profile.bannerPicture}/>

            <div>
                <img className="twitter-profile-img" alt="" src={profile.profilePicture}/>
            </div>
      
            <Link to="/tuiter/edit"
                    className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                Edit profile
            </Link>

            </div>

            <div className="bioSection p-2">
                <h5 className="fw-bolder pb-0 mb-0">
                    {profile.firstName}<i className="fa fa-badge-check text-primary"></i>
                </h5>
                <h6 className="pt-0 fg-color-gray">@{profile.handle}</h6>
                <p className="fg-white pt-2">
                    {profile.bio}
                </p>
                <p>
                    <i className="fa fa-map-marker me-2"></i>
                    Seoul, Korea
                    <i className="fa fa-birthday-cake ms-3 me-2"></i>
                    Born May 1, 2020
                    <i className="far fa-calendar ms-3 me-2"></i>
                    Joined December 2021
                </p>
                <b className="fg-white">2</b> Following
                <b className="ms-4 fg-white">3.1M</b> Followers

            </div>
        </div>
    </>
    );
}
export default ProfileComponent;