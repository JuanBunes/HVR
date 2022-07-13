import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {List, Button, ButtonGroup, ListGroup, Container, Nav} from 'react-bootstrap';

const Categorias2 = () => {

	const { categoria } = useParams();

	const [categorias, setCategorias] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	const getCategoriasAPI = async () => {
		const rutaCategoriaAPI = 'https://juanbunesapirest.herokuapp.com/categorias/';
		const getCategoria = await fetch(rutaCategoriaAPI);
        const resultCategoria = await getCategoria.json();
        setCategorias(resultCategoria);
        setIsLoading(false)
	}

	useEffect(() => {
        getCategoriasAPI();
    }, []);

    if (isLoading) 
  		return (
				<div>
					<Nav defaultActiveKey="/home" className="navbar-categorias flex-column navbar-expand-sm">
  					<Nav.Link className="navlink-categoria-titulo" eventKey="disabled" disabled><b>Cargando...</b></Nav.Link>
  				</Nav> 
				</div>
  		);

	return(   
		<div>
			<Nav defaultActiveKey="/home" className="navbar-categorias flex-column navbar-expand">
				<hr/>
				<Nav.Link className="navlink-categoria-titulo" eventKey="disabled" disabled><b>Categorías</b></Nav.Link>
				<hr/>
				<Nav.Link className="nav-linktodos" action href='/productos/'><b>Todos los productos</b></Nav.Link>
				<hr/>
				{categorias.map( categoria => (
	                <Nav.Link action href={'/categoria/' + categoria.nombre_categoria} style={{fontSize: 18}}>{categoria.nombre_categoria}</Nav.Link>
	            ))}
	            <hr/>
	        <div className="mt-5">
	        </div>
			</Nav>     
		</div>
	);
	
}

export default Categorias2;