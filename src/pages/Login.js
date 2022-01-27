import React from 'react';
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import { FaGoogle } from 'react-icons/fa';

function Login() {
    const RenderLogin = () => {
        return (
            <>
                <div className="min-h-screen bg-gray-100 dark:bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
	                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Silakan Masukkan Akun Anda</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <form className="mb-10">
                                            <div className="relative">
                                                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>
                                                <input id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Alamat Surel" />
                                            </div>
                                            <div className="relative mt-5">
                                                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                </div>
                                                <input id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Kata Sandi" />
                                                </div>
                                            <div className="relative mt-5">
                                                <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1">Masuk</button>
                                            </div>
                                        </form>
                                        <div className="relative mt-10 h-px bg-gray-300">
                                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                                <span className="bg-white px-4 text-xs text-gray-500 uppercase">Atau Masuk Dengan</span>
                                            </div>
                                        </div>
                                        <button className="w-full relative mt-10 border rounded-md py-2 text-sm text-black bg-gray-50 hover:bg-gray-200">
                                            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-red-500"><FaGoogle /></span>
                                            <span>Login with Google</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <SEO
                lang={"id"}
                title={"Masuk Akun | MPK Moklet"}
                description={"Selamat datang di Aplikasi Aspirasi Online by MPK Moklet"}
                // image={"https://naufalakbar.com/images/naufalakbar.png"}
                // url={"https://naufalakbar.com"}
                keywords={"Website Aspirasi Online, Aplikasi Aspirasi Online, TASIS, MPK Moklet"}
            />
            <Navbar />
            <RenderLogin />
            <div className="flex-grow bg-white"></div>
            <Footer />
        </div>
    );
}

export default Login;
