import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';
import backgroundImage from './images/background.webp';
import Logo from './images/logo.webp';

const StudioElementar = () => {
    return (
        <div className="min-h-screen">
            <section className="min-h-screen relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>

                <div className="absolute inset-0 bg-black opacity-80"></div>

                <div className="relative z-10 flex flex-col items-center justify-between min-h-screen text-white text-center pb-10">
                    <div className="w-full bg-white bg-opacity-10 text-white py-4 px-6 flex justify-center items-center">
                        <nav className="flex gap-10">
                            <a href="#home" className="hidden md:block font-light text-sm uppercase tracking-wide hover:text-gray-300">Home</a>
                            <a href="#sobre" className="hidden md:block font-light text-sm uppercase tracking-wide hover:text-gray-300">Sobre</a>
                            <a href="#servicos" className="hidden md:block font-light text-sm uppercase tracking-wide hover:text-gray-300">Serviços</a>
                            <a href="#contato" className="hidden md:block font-light text-sm uppercase tracking-wide hover:text-gray-300">Contato</a>

                            <a href="#home" className="block md:hidden text-2xl hover:text-gray-300"><FaHome /></a>
                            <a href="#sobre" className="block md:hidden text-2xl hover:text-gray-300"><FaInfoCircle /></a>
                            <a href="#servicos" className="block md:hidden text-2xl hover:text-gray-300"><FaServicestack /></a>
                            <a href="#contato" className="block md:hidden text-2xl hover:text-gray-300"><FaEnvelope /></a>
                        </nav>
                    </div>

                    <div className="max-w-screen-md mx-auto px-4 py-10">
                        <img className="w-full" src={Logo} alt="logo"/>
                        <h2 className="text-lg md:text-3xl font-regular mb-4">A essência do design sob medida</h2>
                    </div>
                    
                    <div className="max-w-screen-xl grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-16 px-4">
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <div className="w-full aspect-square rounded-full bg-white/30 flex flex-col items-center justify-center p-5">
                                    <h2 className="text-5xl text-white font-extrabold opacity-full pb-3">
                                        <CountUp start={isVisible ? 0 : 1267} end={1200} prefix="+" duration={2} separator="." />
                                    </h2>
                                    <p className="text-sm md:text-base text-white uppercase tracking-wide">entregas no último ano</p>
                                </div>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <div className="w-full aspect-square rounded-full bg-white/30 flex flex-col items-center justify-center p-5">
                                    <h2 className="text-5xl text-white font-extrabold opacity-full pb-3">
                                        <CountUp start={isVisible ? 0 : 17} end={17} prefix="+" duration={1.5} separator="." />
                                    </h2>
                                    <p className="text-sm md:text-base text-white uppercase tracking-wide">anos no mercado</p>
                                </div>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <div className="w-full aspect-square rounded-full bg-white/30 flex flex-col items-center justify-center p-5">
                                    <h2 className="text-5xl text-white font-extrabold opacity-full pb-3">
                                        <CountUp start={isVisible ? 0 : 8650} end={8650} prefix="+" duration={1.5} separator="." />
                                    </h2>
                                    <p className="text-sm md:text-base text-white uppercase tracking-wide">clientes satisfeitos</p>
                                </div>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <div className="w-full aspect-square rounded-full bg-white/30 flex flex-col items-center justify-center p-5">
                                    <h2 className="text-5xl text-white font-extrabold opacity-full pb-3">
                                        <CountUp start={isVisible ? 0 : 112} end={112} prefix="+" duration={2} separator="." />
                                    </h2>
                                    <p className="text-sm md:text-base text-white uppercase tracking-wide">filiais no Brasil todo</p>
                                </div>
                            )}
                        </VisibilitySensor>
                    </div>
                </div>
            </section>

            <section className="min-h-screen bg-white"></section>
            
        </div>
    )
};

export default StudioElementar;