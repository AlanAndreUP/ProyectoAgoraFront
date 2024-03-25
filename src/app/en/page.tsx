"use client"

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
import "dotenv/config";
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
        buttonText="Convocatoria 2024 Abierta" />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-3xl font-bold TextColor">What Do We Do?</h1>
              <div className="col-1">
                <p className="mt-4">
                We calibrate the entrepreneurship ecosystem in Latin America to build inclusive prosperity for individuals, businesses, the community, and the environment.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex justify-end inline-block">
              <p className="TextColor mr-2 font-bold">Find Out More About Our Open Programs</p>
              <img className="w-6 h-6 inline-block" src="/flecha.svg" alt="Icono" />
            </div>
          </div>
        </section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card imageUrl="/Cards/Card1.png" title="Entrepreneurs and thriving small businesses" texto="We offer business training, market outreach and access to financing to entrepreneurs and thriving small businesses on their journey towards economic, social and environmental sustainability." />
          <Card imageUrl="/Cards/Card2.png" title="Ecosystem" texto="We contribute to strengthen the ecosystem of entrepreneurs and thriving small businesses with events, such as our Forming Catalysts program, and as co-leaders of the Impact Network, comprising +100 organizations in the region" />
          <Card imageUrl="/Cards/Card3.png" title="Inclusive Projects" texto="We execute specific projects together with partners with whom we share our vision for financial inclusion, gender equality, diversification, resilience and sustainability in value chains, and adaptation to climate change in the region." />
        </div>
    
        <section className="pt-20 pb-10">
          <div className="container mx-auto grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-3xl font-bold TextColor">Our Partners</h1>
              <div className="col-1">
                <p className="mt-4">
                Get to know the organizations that support us in our efforts to become a more inclusive society, in harmony with the environment.</p>
                <p className="mt-4">
                Contact us to find out how to collaborate with Agora Partnerships.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex justify-end inline-block">
              <p className="TextColor mr-2 font-bold">Become a Partner</p>
              <img className="w-6 h-6 inline-block" src="/flecha.svg" alt="Icono" />
            </div>
          </div>
          <Carrusel folderName="carrusel" />
          <div className="container mx-auto grid grid-cols-2 gap-4">
            <h1 className="text-3xl font-bold TextColor">Our Funders</h1>
          </div>
          <Carrusel folderName="financiadores" />

          <div className="FondoBlue text-white py-16 rounded-lg overflow-hidden">
            <div className="container mx-auto">
              <div className="sm:col-span-1 flex justify-end  mb-4">
                <p className="mr-2 font-bold">Find Out More</p>
                <img className="w-6 h-6" src="/flechablanc.svg" alt="Icono" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <h1 className="text-3xl font-bold mb-4">Impact</h1>
                  <p className="max-w-lg">
                  We are committed to transparency towards entrepreneurs and the entrepreneurship ecosystem in Latin America by aligning us with the United Nations’ Sustainable Development Goals.
                  </p>
                </div>
                <div className="sm:col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <CardImpacto titulo="2,300" parrafo="Entrepreneurs served." />
                  </div>
                  <div className="col-span-1">
                    <CardImpacto titulo="329" parrafo="Catalysts trained." />
                  </div>
                  <div className="col-span-1">
                    <CardImpacto titulo="23" parrafo="Countries where we make an impact." />
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          <h1 className="text-3xl font-bold TextColor">Open Calls & News</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardOportunidades imageUrl="/CardsOportunidades/CardOportunidades3.webp" title="Cecilia Foxworthy: It was a 2023 of learning and growth" texto="Letter from our CEO, Cecilia Foxworthy" buttonText="ALL"></CardOportunidades>
          <CardOportunidades imageUrl="/CardsOportunidades/CardOportunidades1.webp" title="Cisco’s grantee and investee partners share what they look forward to most at Climate Week NYC" texto="Climate Week NYC, one of the largest annual climate events since 2009, brings together international leaders from business, government, and civil society to showcase global climate action." buttonText="ALL"></CardOportunidades>
          <CardOportunidades imageUrl="/CardsOportunidades/CardOportunidades2.webp" title="New program for women entrepreneurs ‘Juntas Contamos’ [Together We Count]" texto="‘Juntas Contamos’ [Together We Count] seeks to catalyze the productivity, environmental and social sustainability of Small and Growing Businesses (SGBs) led by women." buttonText="ALL"></CardOportunidades>
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
