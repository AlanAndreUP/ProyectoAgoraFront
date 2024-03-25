import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [activo, setActivo] = useState('ES');

    useEffect(() => {
        if (window.location.pathname.startsWith("/en")) {
          setActivo("EN");
        } else {
          setActivo("ES");
        }
      }, []);
    

    const handleSetActive = (lang: string) => {
        setActivo(lang);
    };

    const renderLinkText = (text: string) => {
        if (activo === "EN" && window.location.pathname === "/en") {
         
            switch (text) {
                case "Quiénes somos":
                    return "About Us";
                case "Programas":
                    return "Programs";
                case "Impacto":
                    return "Impact";
                case "Súmate":
                    return "Join Us";
                case "Recursos":
                    return "Resources";
                case "Sedes":
                    return "Locations";
                case "Change Lab":
                    return "Change Lab";
                case "Donar":
                    return "Donate";
                case "Suscribirme al newsletter":
                        return "Subscribe to the newsletter";
                default:
                    return text;
            }
        }
        return text;
    };

    return (
        <footer className="text-black py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <img src="/logo-14.png" alt="Logo" width={150} height={150} />
                </div>

                <div className="col-span-1">
                    <ul>
                        <li className="elementor-item">{renderLinkText("Quiénes somos")}</li>
                        <li className="elementor-item">{renderLinkText("Programas")}</li>
                        <li className="elementor-item">{renderLinkText("Impacto")}</li>
                        <li className="elementor-item">{renderLinkText("Súmate")}</li>
                        <li className="elementor-item">{renderLinkText("Recursos")}</li>
                        <li className="elementor-item">{renderLinkText("Sedes")}</li>
                        <li className="elementor-item">{renderLinkText("Change Lab")}</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <a href="/donar" className="buttondonar">
                        {renderLinkText("Donar")}
                    </a>
                    <div className="flex inline-block py-4">
                        <p className="TextColor mr-2 font-bold"> {renderLinkText("Suscribirme al newsletter")}</p>
                        <img className="w-6 h-6 inline-block" src="/flecha.svg" alt="Icono" />
                    </div>
                    <a href="/" className={`rounded px-4 py-1 text-sm transition-colors duration-300 ${activo === 'ES' ? 'bg-black text-white font-bold' : ''}`} onClick={() => handleSetActive('ES')}>
                        ES
                    </a>
                    <a href="/en" className={`rounded px-4 py-1 text-sm transition-colors duration-300 ${activo === 'EN' ? 'bg-black text-white' : ''}`} onClick={() => handleSetActive('EN')}>
                        EN
                    </a>
                </div>

                <div className="col-span-1 grid grid-cols-3 w-30 h-20 ">
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faPinterest} size="lg" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
