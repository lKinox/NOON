"use client"

import Link from "next/link";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import CodeEditorWidget from '@/components/layout/code-editor'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from '@/components/animate-ui/components/avatar-group';

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

const AVATARS = [
  {
    src: 'https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg',
    fallback: 'SK',
    tooltip: 'Skyleen',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
    fallback: 'CN',
    tooltip: 'Shadcn',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
    fallback: 'AW',
    tooltip: 'Adam Wathan',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
    fallback: 'GR',
    tooltip: 'Guillermo Rauch',
  },
  {
    src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
    fallback: 'JH',
    tooltip: 'Jhey',
  },
];

const technologies = [
    {
        id: 1,
        alt: "notion",
        image: "/technologies/notion.svg",
    },
    {
        id: 2,
        alt: "discord",
        image: "/technologies/discord.png",
    },
    {
        id: 3,
        alt: "office",
        image: "/technologies/office.png",
    },
    {
        id: 4,
        alt: "python",
        image: "/technologies/python.png",
        
    },
    {
        id: 5,
        alt: "vercel",
        image: "/technologies/vercel.png",
    },
    {
        id: 6,
        alt: "github",
        image: "/technologies/github.png",
    },
    {
        id: 7,
        alt: "figma",
        image: "/technologies/figma.png",
    },
    {
        id: 8,
        alt: "canva",
        image: "/technologies/canva.png",
    },
    {
        id: 9,
        alt: "openai",
        image: "/technologies/openai.png",
    },
    {
        id: 10,
        alt: "javascript",
        image: "/technologies/javascript.png",
    },
    {
        id: 11,
        alt: "nodejs",
        image: "/technologies/nodejs.png",
    },
    {
        id: 12,
        alt: "django",
        image: "/technologies/django.png",
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
    { id: 1, title: "Web Solutions", icon: "/services_icons/web.svg", url: "web-solutions" },
    { id: 2, title: "Mobile Solutions", icon: "/services_icons/mobile.svg", url: "mobile-solutions" },
    { id: 3, title: "AI & Automation", icon: "/services_icons/ia.svg", url: "ai-and-automation" },
    { id: 4, title: "Custom Software", icon: "/services_icons/custom_software.svg", url: "custom-software" },
    { id: 5, title: "Desktop Solutions", icon: "/services_icons/desktop.svg", url: "desktop-solutions" },
    { id: 6, title: "Blockchain Services", icon: "/services_icons/blockchain.svg", url: "blockchain-services" },
    { id: 7, title: "Network Solutions", icon: "/services_icons/network.svg", url: "network-solutions" },
    { id: 8, title: "Game Development", icon: "/services_icons/game.svg", url: "game-development" },
  ];

  return (
    <main className="min-h-screen flex flex-col gap-30">

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-end md:justify-center px-8 md:px-16 overflow-hidden border-b border-[var(--secondary-border-color)] py-30">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center relative gap-10">

          <div className="w-[full] md:w-[50%] flex flex-col items-start justify-center text-center">
            <MotionEffect
              slide={{
                direction: 'down',
              }}
              fade
              zoom
              inView
              delay={0.3}>

            <h1 className="hero-title-h1 font-bold Riosark text-white max-w-[900px] text-start!">
              We boost your vision with digital innovation
            </h1>

            <p className="max-w-[600px] text-white text-start text-[14px] mt-6">
              Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum volutpat odio fringilla augue. Sed dolor tempor in magna urna. Rhoncus feugiat turpis duis ultrices sit lacus magna euismod.
            </p>

            <div className="relative mt-9" style={{ width: 'fit-content' }}>
              <Link
                href="/"
                className="principal-button flex gap-3 justify-center items-center text-white hover:text-[var(--principal-background-color)]!"
              >
                <span className="sm:text-sm">Anyways</span>

              </Link>
            </div>

            <div className="mt-7">
              <AvatarGroup>
                {AVATARS.map((avatar, index) => (
                  <Avatar key={index} className="w-10 h-10 border-3 border-[var(--principal-button-color)]">
                    <Link
                      href="/about"
                    >
                      <AvatarImage src={avatar.src} />
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                      <AvatarGroupTooltip>
                        <p>{avatar.tooltip}</p>
                      </AvatarGroupTooltip>
                    </Link>
                  </Avatar>
                ))}
              </AvatarGroup>
            </div>

            <p className="max-w-[600px] text-white text-start text-[12px] mt-6">
              Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum volutpat odio fringilla augue.
            </p>

            {/* Semi-Arc
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
            */}
            </MotionEffect>

          </div>

          <div className="w-[full] md:w-[50%] relative">

            <MotionEffect
              slide={{
                direction: 'down',
              }}
              fade
              zoom
              inView
              delay={0.3}>
              <CodeEditorWidget />
              <MotionEffect
                slide={{
                  direction: 'down',
                }}
                fade
                zoom
                inView
                delay={1.2}>
                  <Image
                    src="/hero-section/desktop.png"
                    alt="Placeholder"
                    className="absolute bottom-[-53px] right-[-100px] w-[460px] h-auto object-cover rounded-xl"
                    width={2000}
                    height={2000}
                  />
              </MotionEffect>
              <MotionEffect
                slide={{
                  direction: 'down',
                }}
                fade
                zoom
                inView
                delay={1.5}>
                  <Image
                    src="/hero-section/mobile.png"
                    alt="Placeholder"
                    className="absolute bottom-[-38px] right-[146px] w-[300px] h-auto object-cover rounded-xl"
                    width={2000}
                    height={2000}
                  />
              </MotionEffect>
            </MotionEffect>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="w-full flex flex-col items-center justify-center pb-30 px-8 md:px-16 border-b border-[var(--secondary-border-color)]">

        <h1 className="hero-title-h1 font-bold Riosark text-white max-w-[900px] text-center">
          Services
        </h1>

        <p className="max-w-[600px] text-white text-center text-[14px] mt-6">
          Lorem ipsum dolor sit amet consectetur. Ipsum elementum ipsum volutpat odio fringilla augue. Sed dolor tempor in magna urna. Rhoncus feugiat turpis duis ultrices sit lacus magna euismod.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mt-10">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              className="px-6 py-6 rounded-xl max-w-[190px] flex flex-col items-center text-center bg-gray-800/30 border border-gray-700/50 transition-colors duration-200 hover:bg-gray-700/70 cursor-pointer"
              href={`/services/${solution.url}`}
              style={{
                  boxShadow: '0 6px 32px 0 rgba(59, 46, 185, 0.35), 0 1.5px 3px 0 rgba(255,255,255,0.12)',
              }}
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
            </Link>
          ))}
        </div>

      </section>

      {/* Work Procedure Section */}
      <section className="relative px-4 md:px-16 ">
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
              className="max-w-[80%] flex flex-col md:flex-row justify-center items-center pt-6 gap-8"
            >
              <div
                className="flex flex-col items-center gap-5 text-white rounded-xl boxes-services-style p-7 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shadow-xl"
                style={{
                  boxShadow: '0 6px 32px 0 rgba(59, 46, 185, 0.35), 0 1.5px 3px 0 rgba(255,255,255,0.12)',
                }}
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
                style={{
                  boxShadow: '0 6px 32px 0 rgba(59, 46, 185, 0.35), 0 1.5px 3px 0 rgba(255,255,255,0.12)',
                }}
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
                style={{
                  boxShadow: '0 6px 32px 0 rgba(59, 46, 185, 0.35), 0 1.5px 3px 0 rgba(255,255,255,0.12)',
                }}
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
      <section className="w-full flex flex-col border-t border-b border-[var(--secondary-border-color)] ">

        {/* Fist Row */}
        <div className="flex items-center w-full flex-col md:flex-row px-8 md:px-16 max-w-[1440px] m-auto">
            <div className="w-full md:w-[55%]  flex flex-col justify-center items-center md:items-start py-10 pr-0 md:py-16 border-r-0 md:border-r-1 md:border-[var(--secondary-border-color)]">
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
      <section className="w-full flex justify-center items-center flex-col px-8 md:px-16 border-b border-[var(--secondary-border-color)] pb-30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] w-[80%] ">
          
          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-8">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={45} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[12px]">
                Active programers
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-8">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={120} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[12px]">
                Completed projects
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-8">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={95} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[12px]">
                Satisfied customers
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center py-10 md:py-10 rounded-xl bg-gray-800/30 border border-gray-700/50">
            <div className="flex flex-col items-center text-center px-8">
              <h2 className="hero-title-h2 font-bold text-white">
                <LazyNumberFlow targetValue={83} />
              </h2>
              <p className="text-gray-300 max-w-[544px] text-center text-[12px]">
                Solutions implemented
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full flex justify-center items-center flex-col px-8 md:px-30 border-b border-[var(--secondary-border-color)] pb-30">

        <h1 className="text-[22px] Riosark font-bold text-white max-w-[500px] text-center">
          Technologies we use
        </h1>

        {/* Technologies Box */}
        <div className="max-w-[1032px] w-full px-4 md:px-6 py-6 md:py-10 rounded-xl text-center boxes-tecnologies-style justify-evenly overflow-hidden mt-10">
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

      </section>

      {/* Contact Section */}
      <section className="w-full flex flex-col items-center justify-center px-8 md:px-16 pb-30">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-30">
          <div className="w-[100%] md:w-[30%]">
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
            <div className="w-[100%] md:w-[70%] max-w-[700px] border border-[var(--secondary-border-color)] rounded-xl overflow-hidden p-10">
              <form className="w-full">
                  <div className="flex flex-col gap-4 text-white">
                      <label htmlFor="name">Name</label>
                      <input
                          type="text"
                          id="name" // Añadí id para el label
                          placeholder="Your Name"
                          className="p-3 md:p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" // Añadí estilos para bg y text
                      />
                      <label htmlFor="email">Email</label>
                      <input
                          type="email"
                          id="email" // Añadí id para el label
                          placeholder="Your Email"
                          className="p-3 md:p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <label htmlFor="message">Message</label>
                      <textarea
                          id="message" // Añadí id para el label
                          placeholder="Your Message"
                          rows={5} // Establecí un número de filas por defecto
                          className="p-3 md:p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <span className="flex items-center gap-2 text-sm md:text-base"> {/* Alineación y ajuste de tamaño de fuente */}
                          <input type="checkbox" id="privacy-policy" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2" /> {/* ID para checkbox y estilos básicos */}
                          <label htmlFor="privacy-policy">I have read and accept the privacy policies</label>
                      </span>
                      <button
                          type="submit"
                          className="principal-button flex gap-3 justify-center items-center mt-4 text-white hover:text-[var(--principal-background-color)]!" // Añadí margin-top al botón
                      >
                          <span className="text-base">Send Message</span>
                      </button>
                  </div>
              </form>
            </div>
        </div>
      </section>


    </main>

  );
}
