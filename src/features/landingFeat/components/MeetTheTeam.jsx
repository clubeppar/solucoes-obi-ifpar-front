import { CreditCard } from "./CreditCard";
import { Link } from "react-router-dom";
import { CONTRIBUTORS } from "@feats/creditsFeat";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MeetTheTeam() {
  return (
    <div className="about-container">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Conheça a Equipe por Trás do Projeto
      </h3>

      <div className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl min-w-0 overflow-hidden mb-9">
        <Swiper
          className="overflow-hidden flex items-center justify-start w-full h-full"
          loop
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1025: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            }
          }}
        >
          {CONTRIBUTORS.map((person) => (
            <SwiperSlide key={person.name} >

              <CreditCard
                name={person.name}
                role={person.role}
                image={person.image}
                github={person.github || null}
              />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link
        to="/credits"
        className="flex items-center w-fit bg-blue-600 hover:bg-blue-700 custom-transition px-4 py-2 rounded-lg cursor-pointer text-sm leading-5 font-medium shadow-sm"
      >
        Conheça quem faz acontecer o projeto
      </Link>
    </div>
  )
}