import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import LibroDetalle from '../views/LibroDetalle';
//import NotFound from '../views/NotFound';
import {BookList} from "../views/BookList";
import {Header} from "../components/Header";
import {Buscador} from "../components/Buscador";
import {Carrito} from "../components/Carrito";

import {Menu} from "../components/Menu";
import CheckCarrito from '../components/CheckCarrito';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/libros" element={<Layout><Carrito /></Layout>} />
                <Route path="/check" element={<Layout><CheckCarrito/></Layout>} />
                <Route path="/libros/:libroId" element={<Layout><LibroDetalle /></Layout>} />

            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>  
        <Header />
          <Buscador />
        
        {children}
    </>
);

export default GlobalRouter;