import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.freepik.com/premium-vector/two-women-hijabs-collaborating_961875-461272.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React router crash course
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I'm Fasiha, I just completed this React Router Crash Course using HTML, CSS, JavaScript, and React.js! I learned a lot throughout this process. In this project, there's a components folder that contains multiple subfolders, and along with layout.jsx and main.jsx, which structure the application. The coding effects have resulted in the output you see here!  
                        </p>
                        <p className="mt-4 text-gray-600">
                        Excited to keep learning and building more!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}