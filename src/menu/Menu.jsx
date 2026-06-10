import ImageSwipper from "./ImageSwipper";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Menu({ goToHome }) {
  return (
    <div className="w-full h-[100vh] relative ">
      <Swiper
        className="w-full h-full bg-white flex flex-col justify-center items-center gap-4 "
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        draggable={true}
        grabCursor={true}
        loop={true}
      >
        <SwiperSlide>
          <ImageSwipper mainImage={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageSwipper mainImage={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageSwipper mainImage={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageSwipper mainImage={img4} />
        </SwiperSlide>
      </Swiper>

      <button
        className="absolute top-0 left-0 m-8 z-50 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0a0a80] text-white"
        onClick={goToHome}
        aria-label="Go back home"
      >
        <MdOutlineKeyboardBackspace className="text-xl" />
      </button>
    </div>
  );
}

export default Menu;
