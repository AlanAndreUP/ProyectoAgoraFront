import React from 'react';
export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  buttonText?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, buttonText }) => {

  const containerStyles: React.CSSProperties = {
    position: 'relative', // Añadido para posicionar el botón correctamente
    width: '100%', // Ancho al 100% para adaptarse al contenedor
    overflow: 'auto', // Asegura que la imagen no se desborde
  };

 
  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '600px', 
   
  };


  return (
    <div style={containerStyles} className={className}>
      <img src={src} alt={alt} style={imageStyles} />
      
    </div>
  );
};

export default Image;
