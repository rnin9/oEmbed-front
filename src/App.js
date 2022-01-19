import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* routing '/', '/home' */}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
