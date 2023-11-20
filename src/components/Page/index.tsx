/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Botao } from "../../components/Botao";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import { RiHome4Line } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
/* import { SlOptionsVertical } from "react-icons/sl"; */

import Logo from "../../assets/logo.svg";
import Video from "../../assets/2_2.mp4";
import { totalSteps } from "../../stepsConfig";
import { useState, useEffect } from "react";
import axios from "axios";

interface PageProps {
  step: number;
  title: string;
  text: string;
  textBotao: string;
  textBotao2: string;
}

interface GeocodingResult {
  results: any;
  formatted_address: string;
  address_components: {
    long_name: string;
    types: string[];
  }[];
}

interface NominatimResult {
  address: any;
  display_name: string;
}

export const Page = ({
  step,
  title,
  text,
  textBotao,
  textBotao2,
}: PageProps) => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [placeName, setPlaceName] = useState<string | null>(null);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
        console.log(position);
      });
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []); // Chama a função uma vez quando o componente é montado

  useEffect(() => {
    if (userLocation) {
      const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${userLocation[0]}&lon=${userLocation[1]}&format=json&addressdetails=1`;

      axios
        .get<NominatimResult>(nominatimUrl)
        .then((response) => {
          const city = response.data.address.city || response.data.address.town;

          console.log("Nominatim API response:", city);

          if (city) {
            setPlaceName(city);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar o nome do lugar:", error);
        });
    }
  }, [userLocation]);

  return (
    <div className="bg-white flex flex-col w-full m-auto sm:max-w-[700px] shadow-2xl h-screen">
      <img src={Logo} alt="Instadate" className="w-[150px] m-auto p-4" />
      <div className="bg-img rounded-t-md">
        {/*  <video autoPlay muted loop>
          <source src={Video} type="video/mp4" className="bg-video" />
        </video> */}
        <div className="px-3 flex flex-col justify-between h-full pb-20 ">
          <div className={`grid grid-cols-6 gap-1 items-center px-14 py-5`}>
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`bg-white rounded-full h-[5px] ${
                  index < step ? "" : "opacity-30"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between items-center gap-3 ">
            <div className=" flex flex-col gap-3 flex-1 text-white">
              <h1 className="text-2xl font-bold ">{title}</h1>
              <p className="text-base font-normal">{text}</p>
              <p className="text-black font-bold">
                {placeName && (
                  <p className="text-white font-bold">
                    Nome da cidade: {placeName}
                  </p>
                )}
              </p>
              <div className="flex items-center justify-between gap-3">
                <Botao style="style1" text={textBotao} link={step} />
                <Botao style="style2" text={textBotao2} link={step} />
              </div>
            </div>

            <ul className="flex flex-col gap-3 items-center text-white ">
              <button className="flex flex-col items-center gap-1 ">
                <AiOutlineHeart size={25} />
                <p className="text-sm">1253</p>
              </button>
              <button className="flex flex-col items-center gap-1">
                <FaRegComment size={20} />
                <p className="text-sm">12</p>
              </button>
              <button>
                <IoPaperPlaneOutline size={20} />
              </button>
              <button>
                <BiBookmark size={20} />
              </button>
              {/* <button>
              <SlOptionsVertical size={15} />
            </button> */}
            </ul>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white fixed bottom-0 w-full sm:max-w-[700px] py-3 ">
        <ul className="px-3 flex gap-3 items-center justify-around text-white">
          <button className="flex flex-col items-center gap-1 ">
            <RiHome4Line size={25} />
          </button>
          <button className="flex flex-col items-center gap-1">
            <GoSearch size={25} />
          </button>
          <button>
            <IoPaperPlaneOutline size={25} />
          </button>
          <button>
            <AiOutlineHeart size={25} />
          </button>
        </ul>
      </footer>
    </div>
  );
};
