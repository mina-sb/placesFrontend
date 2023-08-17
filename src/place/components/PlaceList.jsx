import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import defaultImg from "../../shared/assets/6369737.png";
import { useParams } from "react-router-dom";
import "./PlaceList.css";

const PlaceList = (props) => {
  const userId = useParams().userId;

  //if places are loaded for profile page
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card className="mt">
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  if (userId) {
    return (
      <ul className="place-list">
        {props.items.map((place) => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            creatorInfo={props.creatorInfo}
            coordinates={place.location}
            onDelete={props.onDeletePlace}
          />
        ))}
      </ul>
    );
  } else {
    //if places are loaded for main page
    let li = props.items.map((place) => {
      let img;
      if (place.creator.image) {
        img = import.meta.env.VITE_APP_ASSET_URL + `/${place.creator.image}`;
      } else {
        img = defaultImg;
      }
      let creatorInfo = {
        name: place.creator.name,
        image: img,
        id: place.creator.id,
        placesCount: place.creator.places.length,
      };

      return (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator.id}
          creatorInfo={creatorInfo}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      );
    });

    return <ul className="place-list">{li}</ul>;
  }
};

export default PlaceList;
