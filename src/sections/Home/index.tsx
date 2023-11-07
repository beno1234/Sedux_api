import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Love from "../../assets/making-love.webp";

export const Home = () => {
  return (
    <section className=" h-screen flex flex-col items-center gap-10 justify-center">
      <img src={Love} alt="love" className="w-[200px]" />
      <div className="flex flex-col gap-1 items-center justify-center text-center">
        <h1>NÃO PRECISA PAGAR PARA FODER </h1>
        <h1>NESTE SITE É GRATUITO</h1>
      </div>
      <Button>
        <Link to={"/step/1"}>Tenho mais de 18 anos.</Link>
      </Button>
    </section>
  );
};
