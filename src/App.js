import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './componenets/Home';
import SignIn from './componenets/SignIn';
import Portal from './componenets/Portal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/portal' element={<Portal />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
