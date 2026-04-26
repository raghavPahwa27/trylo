import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';
import Home from '@/pages/Home';
import Poster from '@/pages/Poster';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.POSTER} element={<Poster />} />
      </Routes>

    </Router>
  );
}
