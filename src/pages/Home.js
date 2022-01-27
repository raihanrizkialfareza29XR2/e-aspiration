import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Home() {
    const RenderHome = () => {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
    return (
        <div className="flex flex-col h-screen">
            <SEO
                lang={"id"}
                title={"Aspirasi Online | MPK Moklet"}
                description={"Selamat datang di Aplikasi Aspirasi Online by MPK Moklet"}
                // image={"https://naufalakbar.com/images/naufalakbar.png"}
                // url={"https://naufalakbar.com"}
                keywords={"Website Aspirasi Online, Aplikasi Aspirasi Online, TASIS, MPK Moklet"}
            />
            <Navbar />
            <RenderHome />
            <div className="flex-grow bg-white"></div>
            <Footer />
        </div>
    );
}

export default Home;
