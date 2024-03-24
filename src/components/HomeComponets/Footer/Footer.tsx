import Image from 'next/image';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [activo, setActivo] = useState('ES');
    const handleSetActive = (lang: string) => {
        setActivo(lang);
    };

    return (
        <footer className="text-black py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <Image src="/logo-14.png" alt="Logo" width={150} height={150} />
                </div>

                <div className="col-span-1">
                    <ul>
                        <li className="elementor-item">Quiénes somos</li>
                        <li className="elementor-item">Programas</li>
                        <li className="elementor-item">Impacto</li>
                        <li className="elementor-item">Súmate</li>
                        <li className="elementor-item">Recursos</li>
                        <li className="elementor-item">Sedes</li>
                        <li className="elementor-item">Change Lab</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <a href="/donar" className="buttondonar">
                        Donar
                    </a>
                    <div className="flex inline-block py-4">
                        <p className="TextColor mr-2 font-bold">Suscribirme al newsletter</p>
                        <img className="w-6 h-6 inline-block" src="/flecha.svg" alt="Icono" />
                    </div>
                    <a href="/" className={`rounded px-4 py-1 text-sm transition-colors duration-300 ${activo === 'ES' ? 'bg-black text-white font-bold' : ''}`} onClick={() => handleSetActive('ES')}>
                        ES
                    </a>
                    <a href="/" className={`rounded px-4 py-1 text-sm transition-colors duration-300 ${activo === 'EN' ? 'bg-black text-white' : ''}`} onClick={() => handleSetActive('EN')}>
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
