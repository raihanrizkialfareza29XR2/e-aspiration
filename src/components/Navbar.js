import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav className="bg-red-600 border-gray-200 px-5 sm:px-36 py-4">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex">
                    <img src="/mpk.png" alt="Brand Logo" className="object-cover w-12 mr-2" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-white">MPK MOKLET</span>
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* <header classNameName="text-gray-600 body-font bg-red-700">
            <div classNameName="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" classNameName="flex title-font font-bold items-center text-white mb-4 md:mb-0">
                    <img src="/mpk.png" alt="Logo Brand" classNameName="object-cover w-14" />
                    <span classNameName="ml-3 text-xl uppercase">Tasis</span>
                </Link>
                <nav classNameName="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="#" classNameName="mr-5 hover:text-gray-900">First Link</Link>
                    <Link to="#" classNameName="mr-5 hover:text-gray-900">Second Link</Link>
                    <Link to="#" classNameName="mr-5 hover:text-gray-900">Third Link</Link>
                    <Link to="#" classNameName="mr-5 hover:text-gray-900">Fourth Link</Link>
                </nav>
                <button classNameName="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" classNameName="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
        </header> */}
    </div>
  );
}

export default Navbar;
