import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import ComingSoon from './routes/ComingSoon';
import PlaceToStay from './routes/PlaceToStay';
import ConnectWallet from './routes/ConnectWallet';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place-to-stay" element={<PlaceToStay />} />
        <Route path="NFTs" element={<ComingSoon />} />
        <Route path="community" element={<ComingSoon />} />
        <Route path="connect-wallet" element={<ConnectWallet />} />
      </Routes>
  );
}

export default App;
