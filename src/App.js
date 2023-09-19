import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import DetailedPage from './components/DetailedPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<LandingPage/>}/>
            <Route path = "/page" element={<DetailedPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
