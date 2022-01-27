import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-white dark:bg-gray-100">
            <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src="/mpk.png" alt="Brand Logo" className="object-cover w-8 mr-2" />
                    <span className="ml-1 text-lg">MPK MOKLET</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} MPK Moklet —
                <a href="https://instagram.com/mpkmoklet" target="_blank" className="text-gray-600 ml-1" rel="noopener noreferrer">@mpkmoklet</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://instagram.com/mpkmoklet" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 text-xl">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/mpkmoklet" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 text-xl">
                        <FaTwitter />
                    </a>
                    <a href="https://youtube.com/c/smktelkommalang" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 text-xl">
                        <FaYoutube />
                    </a>
                </span>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
