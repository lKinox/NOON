"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function getOnlineStatus(memberId: number, date = new Date()) {
    const hoursOnline = 19; // Ahora 18 horas online
    const totalHours = 24;

    // Día del año para que varíe día a día
    const dayOfYear = Math.floor(
        (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
        Date.UTC(date.getFullYear(), 0, 0)) /
        1000 /
        60 /
        60 /
        24
    );

    // Un “offset” único por miembro y por día
    const startHour =
        ((memberId * 13 + dayOfYear * 7) % totalHours); // 13 y 7 son primos para mejor dispersión

    const endHour = (startHour + hoursOnline) % totalHours;
    const currentHour = date.getHours();

    // Determina si está en la franja activa (soporta que la franja cruce la medianoche)
    if (startHour < endHour) {
        return currentHour >= startHour && currentHour < endHour ? "online" : "offline";
    } else {
        return currentHour >= startHour || currentHour < endHour ? "online" : "offline";
    }
}

const teamMembers = [
    {
        id: 1,
        name: "John Jones",
        role: "Developer",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nisl non porttitor consequat pellentesque at felis posuere eleifend orci.",
        image: "/placeholder.png",
    },
    {
        id: 2,
        name: "Rafael Brown",
        role: "Developer",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nisl non porttitor consequat pellentesque at felis posuere eleifend orci.",
        image: "/placeholder.png",
    },
    {
        id: 3,
        name: "Nolan Smith",
        role: "Developer",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nisl non porttitor consequat pellentesque at felis posuere eleifend orci.",
        image: "/placeholder.png",
    },
    {
        id: 4,
        name: "Sarah Wilson",
        role: "Designer",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nisl non porttitor consequat pellentesque at felis posuere eleifend orci.",
        image: "/placeholder.png",
    },
    {
        id: 5,
        name: "Mike Johnson",
        role: "Developer",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nisl non porttitor consequat pellentesque at felis posuere eleifend orci.",
        image: "/placeholder.png",
    },
    {
        id: 6,
        name: "Emma Davis",
        role: "Designer",
        description:
            "Lorem ipsum dolor sit amet consectetur. Nisl non porttitor consequat pellentesque at felis posuere eleifend orci.",
        image: "/placeholder.png",
    },
];

export default function TeamSlider() {
    return (
        <section className="pt-6 md:pt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-0 md:px-7 py-10">
                <div className="relative">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                    nextEl: '#swiper-button-next-custom',
                    prevEl: '#swiper-button-prev-custom',
                    }}
                    breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 3,
                        centeredSlides: true,
                    },
                    }}
                    className="team-slider-swiper !pb-10"
                >
                    {teamMembers.map((member) => {
                    const status = getOnlineStatus(member.id);
                    return (
                        <SwiperSlide key={member.id}>
                        <div className="team-member-card bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col items-center justify-between transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-600/50">
                            <div className="flex justify-center mb-6">
                            <span className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 font-medium Riosark">
                                {member.role}
                            </span>
                            </div>
                            <div className="relative mb-6 mx-auto w-[90%] h-auto bg-gray-700/30 border border-gray-600/50 rounded-xl flex items-center justify-center ">
                            <div className="relative flex items-center justify-center">
                                <Image
                                src={member.image || "/placeholder.png"}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="w-[150%] h-[150%] object-cover rounded-lg transition-opacity duration-300 hover:opacity-100"
                                />
                                <div className="absolute bottom-[-8px] left-3 flex items-center justify-center">
                                <div className="relative">
                                    <div
                                    className={`w-4 h-4 rounded-full ${
                                        status === "online"
                                        ? "bg-green-500 animate-pulse"
                                        : "bg-gray-400"
                                    }`}
                                    title={status === "online" ? "Disponible" : "No disponible"}
                                    ></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-4 Riosark">{member.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    );
                    })}
                </Swiper>
                <Button
                    id="swiper-button-prev-custom"
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-white hover:bg-gray-700/80 hover:text-white transition-all duration-300 -translate-x-6 hidden md:flex"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                    id="swiper-button-next-custom"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-white hover:bg-gray-700/80 hover:text-white transition-all duration-300 translate-x-6 hidden md:flex"
                >
                    <ChevronRight className="w-6 h-6" />
                </Button>
                </div>
            </div>
        </section>
    );
}