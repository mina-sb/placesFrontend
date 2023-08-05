import React from "react";
import ToggleButton from "../../shared/components/FormElements/ToggleButton";
import Button from "../../shared/components/FormElements/Button";
import "./NotificationSettings.css";

const NotificationSettings = () => {
  const logState = (state) => {
    console.log("Toggled:", state);
  };

  return (
    <React.Fragment>
      <ToggleButton
        label="Order Confirmation Notice"
        toggled={true}
        onClick={logState}
      />
      <ToggleButton
        label="Ending Bid Notification "
        toggled={true}
        onClick={logState}
      />
      <ToggleButton
        label="Notification for approving"
        toggled={true}
        onClick={logState}
      />
      <ToggleButton
        label="Payment Card Notification"
        toggled={true}
        onClick={logState}
      />
      <div className="btn-container">
        <Button class="third-color-button">Save</Button>
      </div>
    </React.Fragment>
  );
};

export default NotificationSettings;
