import react from 'react';import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomeScreen } from './components/Screens/HomeScreen';
import ProductScreen from './components/Screens/ProductScreen';

const App=()=>{
  return (
    <> 
    <Header/>
    <main className='py-3'>
    <Container>
    <Router>
      <Routes>
    <Route path='/' element={<HomeScreen/>} ></Route>
    <Route path="/product/:id"  element={<ProductScreen/>}></Route>
    </Routes>
    </Router>
    </Container>  
    </main>
       
    <Footer/>
    </>
  );
}

export default App;
