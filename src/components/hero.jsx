import React from "react";
import NavBar from './navbar';

function Hero() {
    return(
        <section className="bg-hero-pattern bg-no-repeat bg-center-x bg-center-y bg-cover">
            <div className="bg-overlay w-full h-auto">
            <NavBar />
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Ubuntu Based, Rolling Release.</h1>
                <p className="mb-8 text-2xl font-normal sm:px-16 xl:px-48 text-white">Rhino Linux is a rolling release Ubuntu-based distribution with Pacstall & XFCE at its core.
                </p>
                <div className="mb-8 space-y-4 flex-row justify-center pace-y-0 space-x-4">
                    <a href="download" className="inline-flex justify-center items-center py-2 px-4 text-base text-center rounded-[0.65em] bg-rhino-purple hover:scale-105 text-white transition-all text-xl">
                        Download
                    </a>  

                    <a href="#learn" className="inline-flex justify-center items-center py-2 px-4 text-base text-center text-white transition-all text-xl">
                        Learn more
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Hero;