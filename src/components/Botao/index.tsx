import { Link } from "react-router-dom";

interface BotaoProps {
  text: string;
  link: number;
  style: "style1" | "style2"; // Adicionando uma prop 'style'
}

export const Botao = ({ text, link, style }: BotaoProps) => {
  const buttonStyles = {
    style1:
      "botao w-full px-3 py-2 rounded-full text-center text-white font-bold bg-blue-500", // Estilo 1 com cor azul
    style2:
      "botao2 w-full px-3 py-2 rounded-full text-center text-white font-bold bg-red-500", // Estilo 2 com cor vermelha
  };

  return (
    <Link
      to={`/step/${link + 1} `}
      className={buttonStyles[style]} // Aplicando a classe de estilo com base na prop 'style'
    >
      {text}
    </Link>
  );
};
