import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import FollowingFeed from './pages/FollowingFeed';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/following" element={<FollowingFeed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
