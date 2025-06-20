import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <section className="bg-gray-50 flex items-center flex-col">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                        Efficient Attendance System for  
                        <strong className="text-indigo-600">  Modern  </strong>
                        Classrooms
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Track, manage, and visualize student attendance with ease. With real-time 
                        dashboards, elegant design, and intuitive features, our app helps educators save time 
                        and make smarter decisions.
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                            href="#"
                        >
                            Get Started
                        </a>

                        
                    </div>
                </div>
            </div>

            <Image src={'/dashboard.png'} alt='dashboard'
            width={1000}
            height={700}
            className='mt-5 rounded-xl border-2'
            />
        </section>
    )
}

export default Hero