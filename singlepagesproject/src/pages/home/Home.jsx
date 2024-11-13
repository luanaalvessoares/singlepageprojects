import { Link } from "react-router-dom";
import backgroundImage from './images/background.webp';

const Home = () => {
    return (
        <div className="min-h-screen relative bg-black bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="w-full relative z-10 bg-white bg-opacity-10 text-white py-4 px-6 flex justify-center items-center">
                <nav className="flex gap-10">
                    <Link to="/studioelementar" className="font-light text-sm uppercase tracking-wide hover:text-gray-300">StudioElementar</Link>
                    <Link to="/planet-tabs" className="font-light text-sm uppercase tracking-wide hover:text-gray-300">Planet Tabs</Link>
                </nav>
            </div>
        </div>
    )
};

export default Home;