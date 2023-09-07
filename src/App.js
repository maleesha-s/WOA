import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
