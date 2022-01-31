import React from 'react';
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
// import { FaGoogle } from 'react-icons/fa';

function Login() {
    const RenderLogin = () => {
        return (
            <>
                <div className="min-h-screen bg-gray-100 dark:bg-gray-200 py-6 flex flex-col justify-center sm:py-12 mt-10 -mb-10">
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
                                                <input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Kata Sandi" />
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
                                        <button class="flex justify-center items-center w-full bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
                                            <svg class="w-5 h-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                                                <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                                                <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                                                <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                                            </svg>

                                            Masuk Dengan Google
                                        </button>
                                        {/* <button className="w-full relative mt-10 border rounded-md py-2 text-sm text-black bg-gray-50 hover:bg-gray-200">
                                            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-red-500"><FaGoogle /></span>
                                            <span>Login with Google</span>
                                        </button> */}
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
