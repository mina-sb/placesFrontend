import React, { useState, useContext, useEffect } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PlaceItem.css";
import { Link, useLocation } from "react-router-dom";

const PlaceItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [lnk, setLnk] = useState("");
  const currentPlace = !!useLocation().pathname.includes("places");
  const openMapHandler = () => setShowMap(true);

  useEffect(() => {
    if (!currentPlace) setLnk(`${props.creatorId}/places`);
  }, []);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        import.meta.env.VITE_APP_BACKEND_URL +`/places/${props.id}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button class="outline-button mr" onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button class="main-color-button" onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__image">
            <img src={`${props.image}`} alt={props.title} />
          </div>
          <div className="place-item__info">
            <div className="user-info">
              <div className="user-info">
                <Link to={lnk}>
                  <img className="user_img" src={props.creatorInfo.image} />
                </Link>
                <Link to={lnk}>
                  <div className="user_name_container">
                    <span className="user_name">{props.creatorInfo.name}</span>
                    <span className="user_places">
                      {props.creatorInfo.placesCount} Places
                    </span>
                  </div>
                </Link>
              </div>
              <i class="bx bx-dots-horizontal-rounded menu"></i>
             
            </div>
            <h2 className="place-item__info_h2">{props.title}</h2>
            <p>{props.description}</p>
            <div className="loaction-container">
              <i class="bx bx-location-plus location"></i>
              <h3 className="place-item__info_h3">{props.address}</h3>
            </div>
          </div>
          <div className="place-item__actions">
            <Button class="third-color-button btn-xs" onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.userId === props.creatorId && (
              <Button
                class="third-color-button btn-xs"
                to={`/places/${props.id}`}
              >
                EDIT
              </Button>
            )}

            {auth.userId === props.creatorId && (
              <Button
                class="outline-button btn-xs"
                onClick={showDeleteWarningHandler}
              >
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
