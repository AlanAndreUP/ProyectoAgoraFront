import { useState } from 'react';

const Navbar: React.FC = () => {
    const [menuItems] = useState([
        { title: 'Blog', link: '#' },
        { title: 'Convocatoria abierta', link: '#' },
        { title: 'Oportunidad Laboral', link: '#' },
        { title: 'Programa', link: '#' },
        { title: 'Programa en ejecución', link: '#' },
        { title: 'Programas ejecutados', link: '#' },
        { title: 'Sala de Prensa', link: '#' },
        { title: 'Todos', link: '#' }
    ]);

    return (
        <div className="container mx-auto FondoGray rounded-lg  items-center ">
            <div className="flex flex-wrap justify-center items-center py-4 px-4 gap-4">
                {menuItems.map((item, index) => (
                    <a key={index} href={item.link} className="text-white text-sm md:text-base hover:underline mr-4">{item.title}</a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
