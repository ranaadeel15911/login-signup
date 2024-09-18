import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import Privateroute from './services/Privateroute';
import Global from './components/Global';

function App() {
  return (
    <>
     <Routes>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Global/>} path='/global'/>
      <Route element={<Signup/>} path='/signup'/>
<Route element={<Privateroute/>} path='/'>
      <Route element={<Home/>} path='/'/>      
      <Route element={<About/>} path='/about'/>      
</Route>      
      </Routes> 
    </>
  );
}

export default App;
