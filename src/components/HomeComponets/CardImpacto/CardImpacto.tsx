import React from "react";

interface CardImpactoProps {
  titulo: string;
  parrafo: string;
}

const CardImpacto: React.FC<CardImpactoProps> = ({ titulo, parrafo }) => {
  return (
    <div className="bg-white TextColor rounded-lg p-6 m-4 transition-transform hover:scale-105">
      <h1 className="text-lg font-bold mb-4 text-center">{titulo}</h1>
      <p>{parrafo}</p>
    </div>
  );
};

export default CardImpacto;
