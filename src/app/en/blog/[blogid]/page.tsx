"use client"
import { useEffect, useState } from 'react';
import Header from "@/components/HomeComponets/Header/Header";
import Footer from "@/components/HomeComponets/Footer/Footer";
import Loader from "@/components/HomeComponets/Loader/Loader";
import CardOportunidades from "@/components/BlogComponets/CardBlog/CardBlog";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Blog {
    _id: string;
    title: string;
    previewContent: string;
    content: string;
    image: string;
    type: string;
    author: string;
}

const BlogPage: React.FC = () => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const getRandomBlogs = () => {
        const shuffledBlogs = blogs.sort(() => 0.5 - Math.random());
        return shuffledBlogs.slice(0, 3);
    };
    const randomBlogs = getRandomBlogs();
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const rutaActual = window.location.pathname;
                const ruta = rutaActual.split('/blog/')[1];
                const matches = ruta.match(/[a-zA-Z]+/g);
                const title = matches ? matches.join(' ') : '';
                const response = await fetch(`${process.env.API_ENDPOINT_BYBLOG}${encodeURIComponent(title)}`);
                if (!response.ok) {
                    throw new Error('API request failed');
                }
                const data = await response.json();
                if (!data) {
                    throw new Error('Blog not found');
                }
                setBlog(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.API_ENDPOINT!);
                if (!response.ok) {
                    throw new Error('Api no responde');
                }
                const data = await response.json();
                setBlogs(data.Blogs);
                setLoading(false);

            } catch (error) {
                console.error('Error :', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Header />
                    {blog ? (
                        <main>
                            <section className="pt-20 pb-10">
                                <div className="FondoGray text-white py-16 px-32 rounded-lg overflow-hidden">
                                    <div className="container mx-auto">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                                            <div>
                                                <p className=" mb-4">{blog.type}</p>
                                                <h1 className="max-w-lg text-3xl font-bold">{blog.title}</h1>
                                            </div>
                                            <div className="sm:col-span-1 flex justify-center">
                                                <p>{blog.previewContent}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-center py-16">
                                    <img src={blog.image} alt={blog.title} className="w-full max-w-lg" />
                                </div >
                                <h1 className="px-60 text-3xl font-bold pb-4 TextColor">{blog.title}</h1>
                                <p className='px-60 pb-4'> Escrito por {blog.author}</p>
                                <div className='px-60' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                            </section>
                            <div className="col-span-1 grid grid-cols-6 w-30 h-20">
                                <div className="flex justify-center col-span-6">
                                    <div className="flex justify-center mr-4">
                                        <FontAwesomeIcon icon={faFacebook} size="sm" />
                                    </div>
                                    <div className="flex justify-center mr-4">
                                        <FontAwesomeIcon icon={faTwitter} size="sm" />
                                    </div>
                                    <div className="flex justify-center mr-4">
                                        <FontAwesomeIcon icon={faInstagram} size="sm" />
                                    </div>
                                    <div className="flex justify-center mr-4">
                                        <FontAwesomeIcon icon={faLinkedin} size="sm" />
                                    </div>
                                    <div className="flex justify-center mr-4">
                                        <FontAwesomeIcon icon={faYoutube} size="sm" />
                                    </div>
                                    <div className="flex justify-center mr-4">
                                        <FontAwesomeIcon icon={faPinterest} size="sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pl-8 py-4">
                                {randomBlogs.map((blog) => (
                                    <CardOportunidades
                                        key={blog._id}
                                        imageUrl={blog.image}
                                        title={blog.title}
                                        texto={blog.previewContent}
                                        buttonText={blog.type}
                                    />
                                ))}
                            </div>

                        </main>
                    ) : (
                        <p>Blog not found</p>
                    )}
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default BlogPage;
