import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Home />
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default Main;
