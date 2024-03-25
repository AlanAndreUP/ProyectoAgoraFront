"use client"
import Webaccessibilty from '@/components/HomeComponets/Webaccessibility/Webaccessibility';
import { useEffect, useState } from 'react';
import React from "react";
import Header from "@/components/HomeComponets/Header/Header";
import ImgContainer from "@/components/HomeComponets/ImgContainer/ImgContainer"
import Card from "@/components/HomeComponets/Card/Card";
import CardOportunidades from "@/components/HomeComponets/CardOportunidades/CardOportunidades";
import Carrusel from "@/components/HomeComponets/Carrusel/Carrusel";
import CardImpacto from "@/components/HomeComponets/CardImpacto/CardImpacto";
import Newsletter from "@/components/HomeComponets/Newsletter/Newsletter";
import Footer from "@/components/HomeComponets/Footer/Footer";

import Loader from "@/components/HomeComponets/Loader/Loader";


import './page.css';
const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader /> 
      ) : (
        <div>
      <Header />
      <ImgContainer
        src="/ImgContainer.webp"
        alt="Convocatoria 2024"

       />
       <Webaccessibilty />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-3xl font-bold TextColor">¿Qué hacemos?</h1>
              <div className="col-1">
                <p className="mt-4">
                  Calibramos el ecosistema emprendedor de América Latina para crear prosperidad inclusiva para el individuo, la empresa, la comunidad y el medio ambiente.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex justify-end inline-block">
              <p className="TextColor mr-2 font-bold">Conocer más sobre nuestros programas</p>
              <img className="w-6 h-6 inline-block" src="/flecha.svg" alt="Icono" />
            </div>
          </div>
        </section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card  hoverColor='red' imageUrl="/Cards/Card1.png" title="Emprendimientos y pequeñas empresas en crecimiento" texto=" Ofrecemos formación empresarial, vinculación a mercados y acceso a financiamiento a emprendedores y pequeñas empresas en crecimiento en su camino hacia la sostenibilidad económica, social y ambiental." />
          <Card  hoverColor='green'imageUrl="/Cards/Card2.png" title="Ecosistema" texto="Contribuimos al fortalecimiento del ecosistema de emprendedores y pequeñas empresas en crecimiento a través de eventos, tales como el programa Formando Catalizadores, y el co-liderazgo de la Red de Impacto, integrada por más de 100 organizaciones de la región." />
          <Card  hoverColor='orange'imageUrl="/Cards/Card3.png" title="Proyectos inclusivos" texto="Ejecutamos proyectos específicos junto a aliados con los que compartimos nuestra visión por la inclusión financiera, la equidad de género, la diversificación, resiliencia y sostenibilidad en las cadenas de valor, y la adaptación al cambio climático en la región." />
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          <h1 className="text-3xl font-bold TextColor">Convocatorias abiertas y novedades</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardOportunidades imageUrl="/CardsOportunidades/CardOportunidades3.webp" title="Programa Juntas Contamos" texto="Oportunidad para mujeres empresarias en México, Guatemala, El Salvador y Honduras. Juntas Contamos Consta de tres programas dirigidos a 3 perfiles diferentes de empresarias." buttonText="CONVOCATORIA ABIERTA"></CardOportunidades>
          <CardOportunidades imageUrl="/CardsOportunidades/CardOportunidades1.webp" title="“Alcanzar un equilibrio entre el trabajo y familia uno de los retos más importantes al ser empresaria”" texto="Francis Castillo, fundadora de ‘The Baking Mom’es un gran ejemplo de cómo el ser mamá y emprendedora se puede lograr rompiendo paradigmas y miedos" buttonText="BLOG"></CardOportunidades>
          <CardOportunidades imageUrl="/CardsOportunidades/CardOportunidades2.webp" title="Transformando a América Latina: Agora Partnerships adquiere CreativeLab" texto="Esta unión no solo representa una evolución en el nombre de la marca colombiana a ChangeLab, sino que también establece ambiciosas metas para el futuro." buttonText="SALA DE PRENSA"></CardOportunidades>
        </div>
        <section className="pt-20 pb-10">
          <div className="container mx-auto grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-3xl font-bold TextColor">Nuestros aliados</h1>
              <div className="col-1">
                <p className="mt-4">
                  Conoce a las organizaciones que nos acompañan por una sociedad más inclusiva y en sintonía con el ambiente.</p>
                <p className="mt-4">
                  Contáctate para conocer más sobre cómo colaborar con Agora Partnerships.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex justify-end inline-block">
              <p className="TextColor mr-2 font-bold">Súmate como aliado</p>
              <img className="w-6 h-6 inline-block" src="/flecha.svg" alt="Icono" />
            </div>
          </div>
          <Carrusel folderName="carrusel" />
          <div className="container mx-auto grid grid-cols-2 gap-4">
            <h1 className="text-3xl font-bold TextColor">Nuestros Financiadores</h1>
          </div>
          <Carrusel folderName="financiadores" />

          <div className="FondoBlue text-white py-16 rounded-lg overflow-hidden">
            <div className="container mx-auto">
              <div className="sm:col-span-1 flex justify-end  mb-4">
                <p className="mr-2 font-bold">Súmate como aliado</p>
                <img className="w-6 h-6" src="/flechablanc.svg" alt="Icono" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <h1 className="text-3xl font-bold mb-4">Impacto</h1>
                  <p className="max-w-lg">
                    Nos comprometemos a la transparencia con los emprendedores y el ecosistema emprendedor en Latinoamérica alineándonos con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.
                  </p>
                </div>
                <div className="sm:col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <CardImpacto titulo="2,300" parrafo="Emprendedores atendidos." />
                  </div>
                  <div className="col-span-1">
                    <CardImpacto titulo="329" parrafo="Catalizadores capacitados." />
                  </div>
                  <div className="col-span-1">
                    <CardImpacto titulo="23" parrafo="Países que tenemos incidencia." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-10 items-center">
            <h1 className="text-3xl font-bold TextColor col-span-2 whitespace-normal">
              Oportunidades laborales
            </h1>
            <a href="/donar" className="buttonOferta  rounded-lg text-lg font-bold whitespace-normal">
              Conoce todas nuestras vacantes
            </a>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardOportunidades imageUrl="/CardsOportunidades/OportunidadLab3.webp" title="Diseñador Gráfico Freelance" texto="Buscamos un/a Diseñador/a Gráfico con al menos 3 años de experiencia en diseño de presentaciones,
                                materiales educativos, brochures, y otros materiales asociados a productos educativos digitales." buttonText="OPORTUNIDAD LABORAL"></CardOportunidades>
            <CardOportunidades imageUrl="/CardsOportunidades/OportunidadLab1.webp" title="Data Engineer (Ingeniero/a de Datos)" texto="Buscamos un/a Data Engineer
                                 (Ingeniero de Datos) que contribuya al desarrollo, implementación y mantenimiento de un sistema de
                                 gestión de datos eficiente, eficaz y robusto" buttonText="OPORTUNIDAD LABORAL"></CardOportunidades>
            <CardOportunidades imageUrl="/CardsOportunidades/OportunidadLab2.webp" title="Gerente de Alianzas" texto="Buscamos un/una profesional con experiencia y habilidades en la construcción y gestión de alianzas comerciales y estratégicas con múltiples tipos de organizaciones" buttonText="OPORTUNIDAD LABORAL"></CardOportunidades>
          </div>

        </section>

        <Newsletter />

        <section>
      <Footer/>
        </section>


        
      </main>
      </div>
      
       )}
    </div>
  );
};

export default Home;
