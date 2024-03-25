import React, { Fragment, useState, useEffect } from "react";
import logo from "../../../../public/logo-14.png";
import Image from "next/image";
import "./Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activo, setActivo] = useState("ES");

  useEffect(() => {
    if (window.location.pathname.startsWith("/en")) {
      setActivo("EN");
    } else {
      setActivo("ES");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (lang: string) => {
    setActivo(lang);
  };

  const renderLinkText = (text: string) => {
    if (activo === "EN" && window.location.pathname.startsWith("/en")) {
      switch (text) {
        case "Quienes Somos":
          return "About Us";
        case "Programas":
          return "Programs";
        case "Impacto":
          return "Impact";
        case "Súmate":
          return "Join Us";
        case "Blog":
          return "Blog";
        case "Recursos":
          return "Resources";
        case "Sedes":
          return "Locations";
        case "Change Lab":
          return "Change Lab";
        case "Donar":
          return "Donate";
        default:
          return text;
      }
    }
    return text;
  };

  const blogLink = activo === "EN" ? "/en/blog" : "/blog"; 
  const homeLink = activo === "EN" ? "/en" : "/"; 
  return (
    <Fragment>
      <div className="bg-white shadow-lg header">
        <div className="container mx-auto flex justify-between items-center containermargin px-4 py-4">
          <div className="flex items-center marginstandarleft">
            <a href={homeLink} className="flex items-center">
              <Image
                src={logo}
                alt="Agora Logo"
                width={120}
                height={30}
                className="mr-4"
              />
            </a>
          </div>

          <nav
            className={`flex space-x-4 px-4 marginstandarleft items-center lg:flex-grow ${
              isOpen ? "flex flex-col lg:flex-row" : "hidden lg:flex"
            }`}
          >
            <a href="/programas" className="elementor-item">
              {renderLinkText("Quienes Somos")}
            </a>
            <a href="/programas" className="elementor-item">
              {renderLinkText("Programas")}
            </a>
            <a href="/impacto" className="elementor-item">
              {renderLinkText("Impacto")}
            </a>
            <a href="/sumate" className="elementor-item">
              {renderLinkText("Súmate")}
            </a>
            <a href={blogLink} className="elementor-item">
              {renderLinkText("Blog")}
            </a>
            <a href="/recursos" className="elementor-item">
              {renderLinkText("Recursos")}
            </a>
            <a href="/sedes" className="elementor-item">
              {renderLinkText("Sedes")}
            </a>
            <a href="/sedes" className="elementor-item-blue">
              {renderLinkText("Change Lab")}
            </a>
           
          </nav>
          <a href="/donar" className="buttondonar marginstandarright">
              {renderLinkText("Donar")}
            </a>
            <a
              href="/"
              className={`rounded px-4 py-1 text-sm transition-colors duration-300 ${
                activo === "ES" ? "bg-black text-white font-bold" : ""
              }`}
              onClick={() => handleSetActive("ES")}
            >
              ES
            </a>
            <a
              href="/en"
              className={`rounded px-4 py-1 text-sm transition-colors duration-300 ${
                activo === "EN" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleSetActive("EN")}
            >
              EN
            </a>
          <div className="flex items-center">
            <button className="lg:hidden ml-4 text-gray-600" onClick={toggleMenu}>
              {isOpen ? "-" : "+"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
