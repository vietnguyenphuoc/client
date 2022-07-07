import Container from 'react-bootstrap/Container';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  return (
    <>
      <Menu/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
