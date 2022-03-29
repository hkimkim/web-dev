import { useSelector } from "react-redux";
import ProfileItem from "./ProfileItem";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return (
        profile.map(info => <ProfileItem profile={info}/>)
    )
}
export default ProfileComponent;