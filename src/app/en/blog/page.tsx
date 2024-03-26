"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/HomeComponets/Header/Header";
import Navbar from "@/components/BlogComponets/Navbar/Navbar";
import Footer from "@/components/HomeComponets/Footer/Footer";
import CardOportunidades from "@/components/BlogComponets/CardBlog/CardBlog";
import Loader from "@/components/HomeComponets/Loader/Loader";
import Webaccessibilty from "@/components/HomeComponets/Webaccessibility/Webaccessibility";

interface Blog {
    _id: string;
    title: string;
    previewContent: string;
    image: string;
    type: string;
}

const Home: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;
    var endpoint = "es";

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (window.location.pathname.startsWith("/en")) {
                    endpoint = "en";
                }
                const response = await fetch(process.env.API_ENDPOINT! + endpoint);
                if (!response.ok) {
                    throw new Error('Api no responde');
                }
                const data = await response.json();
                setBlogs(data.Blogs);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);


    const filteredBlogs = filterType ? blogs.filter(blog => blog.type === filterType) : blogs;


    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Header />

                    <main>
                        <Webaccessibilty />
                        <section className="pt-32 pb-20 px-8 sm:px-20">
                            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="FondoBlue text-white py-16 rounded-lg overflow-hidden">
                                    <div className="container mx-auto">
                                        <div className="sm:col-span-1 flex flex-col justify-center items-center sm:items-start mb-4 pl-8">
                                            <p className="mb-2 sm:mb-0">OUR BLOG</p>
                                            <h1 className="text-3xl font-bold text-center sm:text-left mb-4">Find out our latest articles and news</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <img
                                        className="object-cover w-full h-full sm:absolute top-0 left-0 z-0 rounded-lg"
                                        src="/blog1.png"
                                        alt="Caminando"
                                    />
                                </div>
                            </div>
                        </section>


                        <Navbar setFilterType={setFilterType} />
                        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pl-8 py-4">
                            {currentBlogs.map((blog) => (
                                <CardOportunidades
                                    key={blog._id}
                                    imageUrl={blog.image}
                                    title={blog.title}
                                    texto={blog.previewContent}
                                    buttonText={blog.type}
                                />
                            ))}
                        </div>

                        <ul className="pagination container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pl-8 py-4 justify-center">
                            {filteredBlogs.length > blogsPerPage && (
                                Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }).map((_, index) => (
                                    <li key={index} className="page-item">
                                        <button onClick={() => paginate(index + 1)} className="page-link">
                                            {index + 1}
                                        </button>
                                    </li>
                                ))
                            )}
                        </ul>

                    </main>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Home;
