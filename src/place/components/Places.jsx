import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import PlaceList from "../components/PlaceList";
import styles from "./Places.module.css";

const Places = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const [creatorInfo, setCreatorInfo] = useState({});

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          import.meta.env.VITE_APP_BACKEND_URL + "/places"
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal show={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <div className={styles.places}>
          <h2 id="places" className={styles.places_h2}>Places</h2>
          <PlaceList
            items={loadedPlaces}
            onDeletePlace={placeDeletedHandler}
            creatorInfo={creatorInfo}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Places;
