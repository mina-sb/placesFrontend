import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import defaultImg from "../../shared/assets/6369737.png";

const UserItem = (props) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    if (props.image) {
      setImg( `${props.image}`);
    } else {
      setImg(defaultImg);
    }
  }, []);

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={img} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
