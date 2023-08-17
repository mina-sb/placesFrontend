import React from "react";
import UserItem from "./UserItem";

import "./UserList.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const UserList = (props) => {
  const [swiper, setSwiper] = React.useState(null);

  const nexto = () => {
    swiper.slideNext();
  };
  const prevto = () => {
    swiper.slidePrev();
  };
  if (props.users.length === 0) {
    return <h2>There is no user yet!</h2>;
  } else {
    return (
      <React.Fragment>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={22}
          onSwiper={(e) => {
            setSwiper(e);
          }}
          slidesPerView="auto"
        >
          {props.users.map((user) => (
            <SwiperSlide className="res-slide">
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places.length}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-nav-btns">
          <button onClick={prevto}>
            <i class="bx bxs-chevron-left"></i>
          </button>
          <button onClick={nexto}>
            <i class="bx bxs-chevron-right"></i>
          </button>
        </div>
      </React.Fragment>
    );
  }
};

export default UserList;
