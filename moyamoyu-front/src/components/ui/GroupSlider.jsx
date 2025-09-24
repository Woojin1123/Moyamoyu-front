import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { GroupCard } from "@/components/GroupCard"; // GroupCard 컴포넌트 import

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
