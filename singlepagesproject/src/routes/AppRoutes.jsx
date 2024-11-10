import { Routes, Route } from 'react-router-dom';
import StudioElementar from '../pages/studioelementar/StudioElementar';
import PlanetTabs from '../pages/tabs-swiper/PlanetTabs';

const AppRoutes = () => (
  <Routes>
    <Route path="/studioelementar" element={<StudioElementar />} />
    <Route path="/planet-tabs" element={<PlanetTabs />} />
  </Routes>
);

export default AppRoutes;