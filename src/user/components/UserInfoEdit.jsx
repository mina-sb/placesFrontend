import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const UserInfoEdit = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  /*   useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/${auth.userId}`
        );
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchPlace();
  }, [sendRequest, placeId, setFormData]); */

  const placeUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    /* try {
      await sendRequest(
        `http://localhost:5000/api/places/${auth.userId}`,
        "PATCH",
        JSON.stringify({
          name: formState.inputs.title.value,
          email: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      navigate("/" + auth.userId + "/places");
    } catch (err) {} */
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  /*  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  } */

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && (
        <form onSubmit={placeUpdateSubmitHandler}>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            validators={["REQUIRED", "MIN(5)"]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValid={true}
            /*             initialValue={loadedPlace.title}
             */
          />

          <Input
            id="email"
            type="text"
            placeholder="Email"
            validators={["REQUIRED", "MIN(5)"]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValid={true}
            /*             initialValue={loadedPlace.title}
             */
          />
          <Button
            type="submit"
            class="third-color-button"
            disabled={!formState.isValid}
          >
            Update Info
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UserInfoEdit;
