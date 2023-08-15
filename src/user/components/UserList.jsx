import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules

const UserList = (props) => {
  if (props.users.length === 0) {
    return <h2>There is no user yet!</h2>;
  } else {
    return (
      <React.Fragment>
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
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </React.Fragment>
    );
  }
};

export default UserList;
