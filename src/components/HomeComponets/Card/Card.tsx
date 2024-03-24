import React from "react";

interface CardItemProps {
  imageUrl: string;
  title: string;
  texto: string;
}

const Card: React.FC<CardItemProps> = ({ imageUrl, title, texto }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{texto}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
