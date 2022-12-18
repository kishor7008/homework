import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    
    <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   
   </BrowserRouter>
    </>
  );
}

export default App;
