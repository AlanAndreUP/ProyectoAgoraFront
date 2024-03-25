import React, { Fragment, useState } from "react";
import logo from '../../../../public/logo-14.png';
import Image from "next/image";
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activo, setActivo] = useState('ES'); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handleSetActive = (lang: string) => {
        setActivo(lang);
    };

    return (
        <Fragment>
            <div className="bg-white shadow-lg header">
                <div className="container mx-auto flex justify-between items-center containermargin px-4 py-4">
                    <div className="flex items-center marginstandarleft">
                        <a href="/" className="flex items-center">
                            <Image src={logo} alt="Agora Logo" width={120} height={30} className="mr-4" />
                        </a>
                    </div>

                    <nav className={`flex space-x-4 px-4 marginstandarleft items-center lg:flex-grow ${isOpen ? 'flex flex-col lg:flex-row' : 'hidden lg:flex'}`}>
                        <a href="/programas" className="elementor-item">
                            Quienes Somos
                        </a>
                        <a href="/programas" className="elementor-item">
                            Programas
                        </a>
                        <a href="/impacto" className="elementor-item">
                            Impacto
                        </a>
                        <a href="/sumate" className="elementor-item">
                            Súmate
                        </a>
                        <a href="/blog" className="elementor-item">
                            Blog
                        </a>
                        <a href="/recursos" className="elementor-item">
                            Recursos
                        </a>
                        <a href="/sedes" className="elementor-item">
                            Sedes
                        </a>
                        <a href="/sedes" className="elementor-item-blue">
                            Change Lab
                        </a>
                        <a href="/donar" className="buttondonar marginstandarright">
                            Donar
                        </a>
                        <a href="/" className={`rounded px-4 py-1 text-sm  transition-colors duration-300 ${activo === 'ES' ? 'bg-black text-white font-bold' : ''}`} onClick={() => handleSetActive('ES')}>
                            ES
                        </a>
                        <a href="/en" className={`rounded px-4 py-1  text-sm transition-colors duration-300 ${activo === 'EN' ? 'bg-black text-white' : ''}`} onClick={() => handleSetActive('EN')}>
                            EN
                        </a>
                    </nav>

                    <div className="flex items-center">
                        <button className="lg:hidden ml-4 text-gray-600" onClick={toggleMenu}>
                            {isOpen ? 'Cerrar' : 'Menú'}
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
