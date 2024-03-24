import React from "react";

interface CardItemProps {
  imageUrl: string;
  title: string;
  texto: string;
  buttonText: string; 
}

const CardOportunidades: React.FC<CardItemProps> = ({ imageUrl, title, texto, buttonText }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
        <img className="w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src={imageUrl} alt={title} />
        <div className="absolute top-0 left-0 m-2">
          <button className="bg-gray-800 rounded-full px-2 py-1 text-xs font-semibold text-white">
            {buttonText}
          </button>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{texto}</p>
        </div>
        <div className="px-6 py-4">
          <a href="/donar" className="inline-block buttondonar rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            CONOCER MÁS
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOportunidades;
