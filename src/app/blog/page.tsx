"use client"
import React from "react";
import Header from "@/components/HomeComponets/Header/Header";
import Navbar from "@/components/BlogComponets/Navbar/Navbar";
import Footer from "@/components/HomeComponets/Footer/Footer";
import dotenv from 'dotenv';


dotenv.config();

import './blog.css';
const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="pt-40 pb-20">
                    <div className="container mx-auto grid grid-cols-2 gap-4">
                        <div className="FondoBlue text-white py-16 rounded-lg overflow-hidden">
                            <div className="container mx-auto">
                                <div className="sm:col-span-1 flex justify-start  mb-4 pl-8">
                                    <p className="mr-2 ">NUESTRO BLOG</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-8">
                                    <div className="sm:col-span-1">
                                        <h1 className="text-3xl font-bold mb-4">Conoce nuestros últimos artículos y noticias</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Navbar/>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
