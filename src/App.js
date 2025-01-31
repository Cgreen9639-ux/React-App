import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
        <Page1 />
        <Page2 />
        <Page3 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
