import React from "react";
import UserPlaces from "../../place/pages/UserPlaces";
import ProfileHeader from "../components/ProfileHeader";

const UserProfile = () => {
  return (
    <React.Fragment>
      <ProfileHeader />
      <UserPlaces />
    </React.Fragment>
  );
};

export default UserProfile;
