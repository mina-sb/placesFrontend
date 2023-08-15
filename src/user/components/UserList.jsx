import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return <h2>There is no user yet!</h2>;
  } else {
    return (
      <ul className="users-list">
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
          />
        ))}
      </ul>
    );
  }
};

export default UserList;
