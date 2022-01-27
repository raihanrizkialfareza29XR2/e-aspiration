import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

function About() {
    const RenderAbout = () => {
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <SEO
                lang={"id"}
                title={"Tentang MPK | MPK Moklet"}
                description={"MPK Moklet adalah suatu organisasi di SMK Telkom Malang yang bertugas mengawasi kinerja OSIS Moklet dalam menjalankan tugas-tugasnya selama masa jabatannya berlangsung."}
                // image={"https://naufalakbar.com/images/naufalakbar.png"}
                // url={"https://naufalakbar.com"}
                keywords={"Website Aspirasi Online, Aplikasi Aspirasi Online, TASIS, Tentang MPK Moklet, MPK Moklet"}
            />
            <Navbar />
            <RenderAbout />
            <div className="flex-grow bg-white"></div>
            <Footer />
        </div>
    );
}

export default About;
