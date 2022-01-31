import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

function Statistics() {
    const RenderStatistics = () => {
        return (
          <div>
              <h2>Statistics</h2>
          </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <SEO
                lang={"id"}
                title={"Statistik MPK | MPK Moklet"}
                description={"Halo."}
                // image={"https://naufalakbar.com/images/naufalakbar.png"}
                // url={"https://naufalakbar.com"}
                keywords={"Website Aspirasi Online, Aplikasi Aspirasi Online, TASIS, Statistik Aspirasi, MPK Moklet"}
            />
            <Navbar />
            <RenderStatistics />
            <div className="flex-grow bg-white"></div>
            <Footer />
        </div>
    );
}

export default Statistics;
