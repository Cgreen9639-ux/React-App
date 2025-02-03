import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import DopeStyles from './components/DopeStyles';

function App() {
    return (
        <div>
            <Header />
            <main>
                <DopeStyles />
                <ProductList />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
