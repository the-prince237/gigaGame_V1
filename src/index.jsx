import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import Game from './pages/Game';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import GlobalStyle from './utils/style/GlobalStyle';
import {CartProvider, FavoritesProvider} from './utils/context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <CartProvider>
        <FavoritesProvider>
          <Header />
          <Cart/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/games' element={<Games/>} />
            <Route path='/game/:gameId'  element={<Game/>} />
            <Route path='/connexion' element={<Connexion/>} />
            <Route path='/inscription' element={<Inscription/>} />
          </Routes>
          <Footer/>    
        </FavoritesProvider>
        
      </CartProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);