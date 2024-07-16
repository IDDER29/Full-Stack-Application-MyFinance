import React, { useState } from "react";
import Navbar from "./nav";
const FormLogin = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#ffffff] px-5 ">
                <div className={`xl:max-w-3xl w-3/4 p-5 sm:p-10 bg-[#174EBB] rounded-3xl`} >
                    <h1 className={`text-center text-xl sm:text-3xl font-semibold`}>Register</h1>
                    <div className="w-full mt-8">
                        <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                            <input className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
                                type="email"
                                placeholder="Enter your email"
                            />
                            <input className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline `}
                                type="password"
                                placeholder="Password"
                            />
                            <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none w-64 md:w-80 lg:w-96 xl:w-[28rem] mx-auto">
                                <svg className="w-6 h-6 -ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                                <span className="ml-3">Loge in</span>
                            </button>
                            <p className="mt-6 text-xs text-[balck] text-center">
                                Already have an account?{" "}
                                <a href="">
                                    <span className="text-[#E9522C] font-semibold">Login</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FormLogin;
