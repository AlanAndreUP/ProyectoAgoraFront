import React from "react";
import './Card.css';

interface CardItemProps {
  imageUrl: string;
  title: string;
  texto: string;
  hoverColor: string; 
}

const Card: React.FC<CardItemProps> = ({ imageUrl, title, texto, hoverColor }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full rounded-lg transition-transform duration-300 transform hover:scale-105" src={imageUrl} alt={title} />
        <div className="pt-8">
          <div className={`px-6 py-4 hoverEffect rounded-lg ${hoverColor}`}>
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-base">{texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
