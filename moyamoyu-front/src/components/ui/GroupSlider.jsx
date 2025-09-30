import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { GroupCard } from "@/components/GroupCard";
import "swiper/css";
import "swiper/css/navigation";

const GroupSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <GroupCard />
        </SwiperSlide>
        <SwiperSlide>
          <GroupCard />
        </SwiperSlide>
        <SwiperSlide>
          <GroupCard />
        </SwiperSlide>
        <SwiperSlide>
          <GroupCard />
        </SwiperSlide>
        <SwiperSlide>
          <GroupCard />
        </SwiperSlide>
        <SwiperSlide>
          <GroupCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GroupSlider;
