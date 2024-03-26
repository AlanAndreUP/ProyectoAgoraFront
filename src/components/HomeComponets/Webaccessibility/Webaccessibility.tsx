import React, { useState } from 'react';

const Webaccessibilty: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 10)); 
  };

  return (
    <div className="fixed bottom-4 right-4 z-100">
      <img
        src="/silla.svg"
        alt="Font Icon"
        className="cursor-pointer"
        onClick={toggleMenu}
      />
      {showMenu && (
        <div className="absolute bg-white border border-gray-300 p-2 rounded shadow-lg bottom-10">
          <button
            className="block w-full text-left py-1 px-2 text-sm hover:bg-gray-200"
            onClick={increaseFontSize}
          >
            +
          </button>
          <button
            className="block w-full text-left py-1 px-2 text-sm hover:bg-gray-200"
            onClick={decreaseFontSize}
          >
            -
          </button>
        </div>
      )}
      <style jsx>{`
        img {
          width: 40px;
          height: 40px;
        }
      `}</style>
      <style jsx global>{`
        html {
          font-size: ${fontSize}px;
        }
      `}</style>
    </div>
  );
};

export default Webaccessibilty;
