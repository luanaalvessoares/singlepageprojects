import { Routes, Route } from 'react-router-dom';
import StudioElementar from '../pages/studioelementar/StudioElementar';

const AppRoutes = () => (
  <Routes>
    <Route path="/studioelementar" element={<StudioElementar />} />
  </Routes>
);

export default AppRoutes;