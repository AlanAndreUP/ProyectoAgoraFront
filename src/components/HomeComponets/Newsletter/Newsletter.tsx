import React, { useState } from 'react';
import './Newsletter.css';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Newsletter: React.FC = () => {
    const [token, setToken] = useState('');
    const [siteKey, setSiteKey] = useState(process.env.REACT_APP_HCAPTCHA_SITE_KEY!);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [profesion, setProfesion] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [pais, setPais] = useState('');
    const [errores, setErrores] = useState<Record<string, string>>({});
    const [captchaCompletado, setCaptchaCompletado] = useState(false);
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const validarCampos = () => {
        const errores: Record<string, string> = {};
        if (!nombre) {
            errores.nombre = 'El nombre es obligatorio';
        }
        if (!apellido) {
            errores.apellido = 'El apellido es obligatorio';
        }
        if (!correoElectronico) {
            errores.correoElectronico = 'El correo electrónico es obligatorio';
        } else if (!/^\S+@\S+\.\S+$/.test(correoElectronico)) {
            errores.correoElectronico = 'Ingrese un correo electrónico válido';
        }
        if (!profesion) {
            errores.profesion = 'La profesión es obligatoria';
        }
        if (!empresa) {
            errores.empresa = 'La empresa es obligatoria';
        }
        if (!pais) {
            errores.pais = 'El país es obligatorio';
        }
        return errores;
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
    
        const errores = validarCampos();
        if (Object.keys(errores).length > 0 || !captchaCompletado) {
            setErrores(errores);
            return;
        }
    
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correoElectronico: correoElectronico,
            profesion: profesion,
            empresa: empresa,
            pais: pais,
            role:"Newsletter"
        };
    
        try {
            setEnviando(true);
            const response = await fetch(process.env.API_ENDPOINT_NEWSLETTER!, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });
    
            if (response.ok) {
                console.log('Datos enviados correctamente');
                setEnviado(true); 
            } else {
                console.error('Error al enviar los datos:', response.statusText);
            }
        } catch (error:any) {
            console.error('Error al enviar los datos:', error.message);
        } finally {
            setEnviando(false);
        }
    };
    
    const rutaActual = window.location.pathname;

   
    const esEn = rutaActual === '/en';
    return (
        <div className="backgroundgray p-8 rounded-md shadow-md px-30">
            <div className='container mx-auto'>
               
                <h2 className="text-2xl text-white font-bold mb-4">{esEn ? 'Subscribe to our newsletter' : 'Suscríbete a nuestro newsletter'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex flex-col mb-4">
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className={`input-transparent p-2 rounded-none ${errores.nombre ? 'border-red-500' : ''}`}
                                    placeholder={esEn ? 'Name*' : 'Nombre*'}
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                {errores.nombre && <span className="text-red-500">{errores.nombre}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    className={`input-transparent p-2 rounded-none ${errores.apellido ? 'border-red-500' : ''}`}
                                    placeholder={esEn ? 'Last Name*' : 'Apellido*'}
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                                {errores.apellido && <span className="text-red-500">{errores.apellido}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input
                                    type="text"
                                    id="correoElectronico"
                                    name="correoElectronico"
                                    className={`input-transparent p-2 rounded-none ${errores.correoElectronico ? 'border-red-500' : ''}`}
                                    placeholder={esEn ? 'Email Address*' : 'Correo Electrónico*'}
                                    value={correoElectronico}
                                    onChange={(e) => setCorreoElectronico(e.target.value)}
                                />
                                {errores.correoElectronico && <span className="text-red-500">{errores.correoElectronico}</span>}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col mb-4">
                                <input
                                    type="text"
                                    id="profesion"
                                    name="profesion"
                                    className={`input-transparent p-2 rounded-none ${errores.profesion ? 'border-red-500' : ''}`}
                                    placeholder={esEn ? 'Profession*' : 'Profesión*'}
                                    value={profesion}
                                    onChange={(e) => setProfesion(e.target.value)}
                                />
                                {errores.profesion && <span className="text-red-500">{errores.profesion}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input
                                    type="text"
                                    id="empresa"
                                    name="empresa"
                                    className={`input-transparent p-2 rounded-none ${errores.empresa ? 'border-red-500' : ''}`}
                                    placeholder={esEn ? 'Company*' : 'Empresa*'}
                                    value={empresa}
                                    onChange={(e) => setEmpresa(e.target.value)}
                                />
                                {errores.empresa && <span className="text-red-500">{errores.empresa}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input
                                    type="text"
                                    id="pais"
                                    name="pais"
                                    className={`input-transparent p-2 rounded-none ${errores.pais ? 'border-red-500' : ''}`}
                                    placeholder={esEn ? 'Country*' : 'País*'}
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                />
                                {errores.pais && <span className="text-red-500">{errores.pais}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <HCaptcha
                            sitekey={siteKey}
                            onVerify={(token: string) => {
                                setToken(token);
                                setCaptchaCompletado(true); 
                            }}
                        />
                    </div>
                    <button type="submit" className="buttonenviar font-bold py-2 px-4 rounded-md" disabled={enviando || enviado}>
                        {enviando ? 'Enviando...' : (enviado ? 'Enviado Correctamente' : 'Enviar')}
                    </button>
                     </form>
            </div>
        </div>
    );
}
export default Newsletter;
