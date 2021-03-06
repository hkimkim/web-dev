import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(new Date(profile.dateOfBirth).toLocaleDateString("en-CA"));
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    const updatedProfile = {
      firstName, lastName, bio, location, website, dateOfBirth
    }
    dispatch({type: 'save-profile', profile: updatedProfile});
  }
 return(
      <div>
        <div className="row mt-2">
          <div className="col-1">
            <Link to="/tuiter/profile" className="ms-3 fg-white"><i className="fa fa-times"/></Link>
          </div>

           <div className="col-9">
             <h5 className="fw-bold ms-4">Edit Profile</h5>
           </div>
           <div className="col-2">
            <Link to="/tuiter/profile" className="btn btn-dark bg-white rounded-pill" onClick={saveClickHandler}>Save</Link>
           </div>
          </div>

        <div className="my-2 d-flex justify-content-between">
        <div className="mb-5 position-relative">
            <img className="w-100" alt="" src={profile.bannerPicture}/>

            <div>
                <img className="twitter-profile-img" alt="" src={profile.profilePicture}/>
            </div>
            </div>
      </div>

        <div className="bioSection p-2"> 
          <div className="form-floating">
            <input id="first-name" value={firstName} placeholder="First Name"
                  className="form-control bg-body border-1 border-dark text-white"
                  onChange={(event) => setFirstName(event.target.value)}/>
            <label htmlFor="first-name">First Name</label>
          </div>
          <div className="form-floating mt-3">
            <input id="last-name" value={lastName} placeholder="Last Name"
                  className="form-control bg-body border-1 border-dark text-white"
                  onChange={(event) => setLastName(event.target.value)}/>
            <label htmlFor="last-name">Last Name</label>
          </div>
          <div className="form-floating mt-3">
          <textarea id="bio" value={bio} placeholder="Bio"
                    className="form-control bg-body border-1 border-dark text-white"
                    onChange={(event) => setBio(event.target.value)}/>
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="form-floating mt-3">
            <input id="location" value={location} placeholder="Location"
                  className="form-control bg-body border-1 border-dark text-white"
                  onChange={(event) => setLocation(event.target.value)}/>
            <label htmlFor="location">Location</label>
          </div>
          <div className="form-floating mt-3">
            <input id="website" value={website} placeholder="Website"
                  className="form-control bg-body border-1 border-dark text-white"
                  onChange={(event) => setWebsite(event.target.value)}/>
            <label htmlFor="website">Website</label>
          </div>
          <div className="form-floating mt-3">
            <input id="date-of-birth" value={dateOfBirth} placeholder="Date of Birth"
                  className="form-control bg-body border-1 border-dark text-white" type="date"
                  onChange={(event) => setDateOfBirth(event.target.value)}/>
            <label htmlFor="date-of-birth">Date of Birth</label>
          </div>

        </div>
       
      </div>
  );
};

export default EditProfile;
