import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import ComingSoon from './routes/ComingSoon';
import PlaceToStay from './routes/PlaceToStay';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place-to-stay" element={<PlaceToStay />} />
        <Route path="NFTs" element={<ComingSoon />} />
        <Route path="community" element={<ComingSoon />} />
      </Routes>
  );
}

export default App;
