import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginButton from './components/auth0/loginAuth0';
import LogoutButton from './components/auth0/logoutAuth0';
import ProfileInfo from './components/auth0/profileInfoAuth0';
import NavBar from './components/navBar/navBar'
import Categorias2 from './components/categorias/categorias2'
import ProductosPorCategoria from './components/productos/productosPorCategoria'
import ProductosCards from './components/productos/productosCards'
import CarouselHome from './components/carouselHome'
import Contacto from './components/contacto'
import DetallesProducto from './components/productos/detallesProducto'
import ComentariosProducto from './components/comentarios/comentariosProducto'
import EditarComentario from './components/comentarios/editarComentario'
import EliminarComentario from './components/comentarios/eliminarComentario'
import FooterNavBar from './components/navBar/footerNavBar'

function App() {
  return (
    <div>  
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<CarouselHome/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/categoria/:categoria' element={[<Categorias2/>,<ProductosPorCategoria/>]}/>
            <Route path='/productos' element={[<Categorias2/>,<ProductosCards/>]}/>
            <Route path='/productos/:id_producto' element={[<DetallesProducto/>,<ComentariosProducto/>]}/>
            <Route path='/comentario/editar/:id_comentario' element={<EditarComentario/>}/>
            <Route path='/comentario/eliminar/:id_comentario' element={<EliminarComentario/>}/>

            <Route path='*' element={<Navigate replace to="/"/>} />
        </Routes>
        <FooterNavBar/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;