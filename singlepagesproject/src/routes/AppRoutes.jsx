import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import StudioElementar from '../pages/studioelementar/StudioElementar';
import PlanetTabs from '../pages/tabs-swiper/PlanetTabs';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/studioelementar" element={<StudioElementar />} />
    <Route path="/planet-tabs" element={<PlanetTabs />} />
  </Routes>
);

export default AppRoutes;