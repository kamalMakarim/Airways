import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Find from './pages/Find';
import Drone from './pages/Drone';

function App() {
  return (
    <Routes>
      <Route path="/Airways/" element={<Home />} />
      <Route path="/Airways/find" element={<Find />} />
      <Route path="/Airways/drone" element={<Drone />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
