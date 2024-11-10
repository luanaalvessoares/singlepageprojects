import React, { useEffect, useState } from 'react';
import './PlanetTabs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import backgroundImage from './images/background.webp';
import Venus from './images/venus.webp';
import Marte from './images/marte.webp';
import Saturno from './images/saturno.webp';

const PlanetTabs = () => {
    const tabsTitles = {
        0: 'Saturno',
        1: 'Marte',
        2: 'Vênus',
    };

    return (
        <div className="min-h-screen bg-black relative bg-cover bg-center bg-fixed p-6 md:py-10" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="max-w-screen-lg mx-auto relative z-10 bg-black shadow-white rounded-xl py-10">
                <Swiper
                    slidesPerView={1}
                    autoHeight={true}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => `<span class="${className}">${tabsTitles[index]}</span>`,
                    }}
                    allowTouchMove={true}
                    simulateTouch={true}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="pt-10 md:pt-16"
                >
                    <SwiperSlide>
                        <div className="max-w-screen-md mx-auto px-3 py-10 mt-16">
                            <h2 className="text-white font-extrabold text-5xl text-center pb-6">Saturno</h2>
                            <img src={Saturno} className="max-w-[250px] w-full mx-auto" alt="image" />
                            <p className="text-base md:text-xl text-white font-regular text-center mt-12">Saturno é o sexto planeta a partir do Sol e o segundo maior do sistema solar. Ele se destaca por seus belíssimos anéis compostos principalmente de partículas de gelo e rocha, que refletem a luz do Sol e criam um espetáculo único. Saturno é um gigante gasoso composto majoritariamente de hidrogênio e hélio, com ventos que podem atingir velocidades extremas. Além dos anéis, Saturno possui mais de 80 luas conhecidas, sendo Titã a mais proeminente. Titã é especial por sua atmosfera densa e presença de lagos de metano líquido, despertando grande interesse científico sobre a possibilidade de condições similares às da Terra primitiva.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="max-w-screen-md mx-auto px-3 py-10 mt-16">
                            <h2 className="text-white font-extrabold text-5xl text-center pb-6">Marte</h2>
                            <img src={Marte} className="max-w-[250px] w-full mx-auto" alt="image" />
                            <p className="text-base md:text-xl text-white font-regular text-center mt-12">Marte, o quarto planeta do sistema solar, é conhecido pelo seu solo avermelhado, resultado da presença de óxido de ferro. Este planeta tem despertado fascínio especial devido à sua semelhança com a Terra e à possibilidade de que já tenha abrigado água em estado líquido. Com uma atmosfera fina, Marte é frequentemente afetado por intensas tempestades de poeira que podem envolver todo o planeta. Em sua superfície, encontramos vulcões como o Monte Olimpo, o maior do sistema solar, além do Valles Marineris, um gigantesco sistema de cânions. Missões de exploração buscam sinais de vida passada e possíveis condições para futura colonização humana.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="max-w-screen-md mx-auto px-3 py-10 mt-16">
                            <h2 className="text-white font-extrabold text-5xl text-center pb-6">Vênus</h2>
                            <img src={Venus} className="max-w-[250px] w-full mx-auto" alt="image" />
                            <p className="text-base md:text-xl text-white font-regular text-center mt-12">Vênus é o segundo planeta mais próximo do Sol e o mais quente do sistema solar, com temperaturas que chegam a 465°C devido ao efeito estufa descontrolado em sua atmosfera espessa de dióxido de carbono. Sua superfície é coberta por vulcões ativos e planícies rochosas, constantemente escondidas sob nuvens de ácido sulfúrico que refletem a luz solar e tornam Vênus o planeta mais brilhante no céu noturno da Terra. Curiosamente, Vênus possui uma rotação retrógrada, girando no sentido oposto ao da maioria dos planetas, o que significa que o Sol nasce no oeste e se põe no leste. Apesar de suas condições hostis, estudar Vênus ajuda a entender fenômenos atmosféricos e climáticos extremos.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>    
            </div>
        </div>
    )
}

export default PlanetTabs;