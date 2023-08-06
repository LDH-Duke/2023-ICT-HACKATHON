import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import Signup from './pages/signup/signup'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route className='signup' path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
