import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Developer from './pages/Developer/Developer';
import Security from './pages/Security/Security';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Developer />} />
          <Route path="/dev" element={<Developer />} />
          <Route path="/cyber" element={<Security />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
