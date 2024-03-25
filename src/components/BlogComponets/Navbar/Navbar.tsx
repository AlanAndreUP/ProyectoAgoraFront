import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
    setFilterType: (type: string | null) => void; 
}

const Navbar: React.FC<NavbarProps> = ({ setFilterType }) => {
    const [menuItems] = useState([
        { title: 'Blog', link: '#', type: 'Blog' }, 
        { title: 'Convocatoria abierta', link: '#', type: 'Convocatoria' },
        { title: 'Oportunidad Laboral', link: '#', type: 'Oferta Laboral' },
        { title: 'Programa', link: '#', type: 'Programa' },
        { title: 'Programa en ejecución', link: '#', type: 'Ejecucion' },
        { title: 'Programas ejecutados', link: '#', type: 'Ejecutados' },
        { title: 'Sala de Prensa', link: '#', type: 'Prensa' },
        { title: 'Todos', link: '#', type: null }, 
    ]);

    return (
        <div className="container mx-auto FondoGray widthspecial rounded-lg  items-center ">
            <div className="flex flex-wrap justify-center items-center py-4 px-4 gap-4">
                {menuItems.map((item, index) => (
                    <a key={index} href={item.link} className="text-white text-sm md:text-base hover:underline mr-4 letterspecial" onClick={() => setFilterType(item.type)}>
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
