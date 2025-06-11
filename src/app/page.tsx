"use client"

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

interface LazyNumberFlowProps {
  targetValue: number;
}
function LazyNumberFlow({ targetValue }: LazyNumberFlowProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const valueToRender = inView ? targetValue : 0;

  return (
    <span ref={ref} className="hero-title-h2 font-bold text-[#3B2EB9]! ">
      + <CountUp start={0} end={valueToRender} duration={4} className="text-white"/> 
    </span>
  );
}

const technologies = [
    {
        id: 1,
        alt: "notion",
        image: "/technologies/notion.svg",
    },
    {
        id: 2,
        alt: "discord",
        image: "/technologies/discord.svg",
    },
    {
        id: 3,
        alt: "office",
        image: "/technologies/office.svg",
    },
    {
        id: 4,
        alt: "python",
        image: "/technologies/python.svg",
        
    },
    {
        id: 5,
        alt: "vercel",
        image: "/technologies/vercel.svg",
    },
    {
        id: 6,
        alt: "github",
        image: "/technologies/github.svg",
    },
    {
        id: 7,
        alt: "figma",
        image: "/technologies/figma.svg",
    },
    {
        id: 8,
        alt: "canva",
        image: "/technologies/canva.svg",
    },
    {
        id: 9,
        alt: "openai",
        image: "/technologies/openai.svg",
    },
    {
        id: 10,
        alt: "javascript",
        image: "/technologies/javascript.svg",
    },
    {
        id: 11,
        alt: "nodejs",
        image: "/technologies/nodejs.svg",
    },
    {
        id: 12,
        alt: "django",
        image: "/technologies/django.svg",
    },
    {
        id: 13,
        alt: "csharp",
        image: "/technologies/c-sharp.svg",
    },
];

export default function Home() {

  {/* Services Boxes */}
  const solutions = [
    { id: 1, title: "Web Solutions", icon: "/services_icons/web.svg" },
    { id: 2, title: "Mobile Solutions", icon: "/services_icons/mobile.svg" },
    { id: 3, title: "AI & Automation", icon: "/services_icons/ia.svg" },
    { id: 4, title: "Custom Software", icon: "/services_icons/custom_software.svg" },
    { id: 5, title: "Desktop Solutions", icon: "/services_icons/desktop.svg" },
    { id: 6, title: "Blockchain Services", icon: "/services_icons/blockchain.svg" },
    { id: 7, title: "Network Solutions", icon: "/services_icons/network.svg" },
    { id: 8, title: "Game Development", icon: "/services_icons/game.svg" },
  ];

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="h-auto md:h-screen w-full flex flex-col items-center justify-end md:justify-center pt-40 md:pt-0 px-8 md:px-16">
        <div className="w-full flex flex-col items-center justify-center relative">

          <h1 className="hero-title-h1 font-bold Riosark text-white max-w-[900px] text-center">
            We boost your vision with digital innovation
          </h1>

          <div className="relative mt-9">
            <Link
              href="/"
              className="principal-button flex gap-3 justify-center items-center text-white hover:text-[var(--principal-background-color)]!"
            >
              <span className="sm:text-sm">Anyways</span>

            </Link>
          </div>

          {/* Semi-Arc */}
          <div className="relative w-full flex justify-center items-center" style={{ minHeight: '150px' }}>
            <div className="absolute top-0 left-0 right-0 w-full max-w-[1440px] overflow-hidden m-auto">
              <svg
                className="w-full h-auto"
                viewBox="0 0 1440 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,300 
                  C360,0 1080,0 1440,300" 
                  stroke="url(#gradient)" 
                  strokeWidth="7" 
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FFF" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#FFF" />
                    <stop offset="1" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="w-full flex flex-col items-center justify-center pt-8 md:pt-0 mt-0 md:mt-8 px-8 md:px-16">

        <h1 className="hero-title-h1 font-bold Riosark text-white max-w-[900px] text-center">
          Services
        </h1>

        <p className="max-w-[600px] text-white text-center text-[14px] mt-6">
          Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum volutpat odio fringilla augue. Sed dolor tempor in magna urna. Rhoncus feugiat turpis duis ultrices sit lacus magna euismod.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 mt-10">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="px-6 py-6 rounded-xl max-w-[190px] flex flex-col items-center text-center bg-gray-800/30 border border-gray-700/50"
            >
              {/* Icono (Placeholder) */}
              <div className="w-20 h-20 mb-4 rounded-full flex items-center justify-center">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={80}
                  height={80}
                  className="object-contain max-w-[60px] max-h-[60px]"
                />
              </div>
              <h3 className="text-[12px] md:text-[17px] font-semibold text-white Riosark">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>

      </section>

      {/* Work Procedure Section */}
      <section className="relative pt-16 md:pt-32 overflow-hidden px-4 md:px-16">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Title */}
          <div className="text-center flex flex-col items-center">
            <h1 className="hero-title-h1 m-auto font-bold Riosark text-white max-w-[900px] text-center">
              Work Procedure
            </h1>
            <p className="max-w-[600px] text-white text-center text-[14px] mt-6 md:my-6 m-auto">
              Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum volutpat
              odio fringilla augue. Sed dolor tempor in magna urna. Rhoncus feugiat
              turpis duis ultrices sit lacus magna euismod.
            </p>

            <div
              className="max-w-[80%] flex flex-col md:flex-row flex-wrap justify-center items-center pt-6 gap-6"
            >
              <div
                className="flex flex-col items-center gap-5 text-white rounded-xl boxes-services-style p-7 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              >
                <Image
                  src="/placeholder.png"
                  alt="Discovery"
                  className="rounded-xl border border-[var(--secondary-border-color)] p-4"
                  width={100}
                  height={100}
                />
                <h2 className="Riosark">Discovery</h2>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum
                  volutpat odio fringilla augue.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-5 text-white rounded-xl boxes-services-style p-7 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              >
                <Image
                  src="/placeholder.png"
                  alt="Strategy"
                  className="rounded-xl border border-[var(--secondary-border-color)] p-4"
                  width={100}
                  height={100}
                />
                <h2 className="Riosark">Strategy</h2>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum
                  volutpat odio fringilla augue.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-5 text-white rounded-xl boxes-services-style p-7 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              >
                <Image
                  src="/placeholder.png"
                  alt="Development"
                  className="rounded-xl border border-[var(--secondary-border-color)] p-4"
                  width={100}
                  height={100}
                />
                <h2 className="Riosark">Development</h2>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum
                  volutpat odio fringilla augue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why noon? Section First Row */}
      <section className="w-full flex flex-col mt-16 md:mt-32 border-t border-b border-[var(--secondary-border-color)]">

        {/* Fist Row */}
        <div className="flex items-center w-full flex-col md:flex-row px-8 md:px-16 max-w-[1440px] m-auto">
            <div className="w-full md:w-[55%] flex flex-col justify-center items-center md:items-start py-10 pr-0 md:py-16 border-r-0 md:border-r-1 md:border-[var(--secondary-border-color)]">
              <h2 className="hero-title-h2 font-bold text-white Riosark ">Why <span className="text-[var(--principal-border-button)]">noon?</span></h2>
              <p className="mt-4 text-gray-300 max-w-[544px] text-[13px] text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur. Risus feugiat augue nisl leo augue ullamcorper tristique placerat. Malesuada pulvinar nunc malesuada a. Eu et egestas gravida at mi ut viverra pellentesque. Fermentum proin nibh faucibus in orci mattis est ultrices sit.
              </p>
            </div>
            <div className="flex w-full md:w-[45%] justify-center md:justify-center items-center text-base relative pb-4 md:pb-0">
              <Image
                src="/base/profesor.gif"
                alt="profesor"
                width={260}
                height={260}
                className="profesor-style"
                unoptimized
              />
            </div>
        </div>

      </section>

      {/* Why noon? Section Three Row V2 */}
      <section className="w-full flex justify-center items-center flex-col px-8 md:px-16 my-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] w-[80%] mt-10">
          
          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-10">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={45} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[14px]">
                Active programers
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-10">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={120} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[14px]">
                Completed projects
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-10">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={95} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[14px]">
                Satisfied customers
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-10">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={83} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[14px]">
                Solutions implemented
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full flex justify-center items-center flex-col px-8 md:px-30 my-16 md:my-32">

      {/* Tecnologies Box */}
      <div className="max-w-[1032px] w-full px-4 md:px-6 py-6 md:py-10 rounded-xl   text-center boxes-tecnologies-style justify-evenly overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            speed={5000}
            freeMode={true}
            grabCursor={true} 
            breakpoints={{
                0: {
                  slidesPerView: 2,
                  centeredSlides: false,
                  spaceBetween: 10,
                  },
                768: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
            }}
            className="technologies-swiper"
        >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.id}>
                <Image
                  src={tech.image}
                  alt={tech.alt}
                  width={100}
                  height={100}
                  className="tecnologies-img"
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact  */}
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center mt-16 md:mt-30 gap-10">
        <div className="w-[100%] md:w-[50%]">
            <h2 className="hero-title-h1 font-bold Riosark text-white max-w-[900px] text-left hero-title-h2">
              Contact us
            </h2>
            <p className="max-w-[480px] text-white text-left text-[14px] mt-10">
              Lorem ipsum dolor sit amet consectetur. Aenean pharetra sagittis sed est viverra vel feugiat morbi pellentesque. Aenean vel viverra commodo ac turpis donec ut. Scelerisque amet venenatis nec lorem egestas. Tincidunt volutpat feugiat tincidunt orci gravida pretium ut scelerisque. Vulputate volutpat amet malesuada proin. Cras tempor pellentesque viverra molestie diam gravida.
            </p>
            <div className="relative mt-9" style={{ width: 'fit-content' }}>
              <Link
                href="/"
                className="principal-button flex gap-3 justify-center items-center text-white hover:text-[var(--principal-background-color)]!"
              >
                <span className="text-base sm:text-sm md:text-base">Let's talk</span>
              </Link>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] max-w-[600px] border border-[var(--secondary-border-color)] rounded-xl overflow-hidden p-10">
            <Image
              src="/placeholder.png"
              alt="Contact Us"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

      </section>

    </main>

  );
}
