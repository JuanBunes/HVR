import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Card, Container, Button, Row, Col} from 'react-bootstrap';

const ProductosPorCategoria = () => {

	const { categoria } = useParams();

	const [productos, setProductos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(false);


	const getProductosByCategoriasAPI = async () => {
		const rutaProductosByCategoriaAPI = 'https://juanbunesapirest.herokuapp.com/productos/categoria/'+categoria;
		const getProductosByCategoria = await fetch(rutaProductosByCategoriaAPI);
        const resultProductosByCategoria = await getProductosByCategoria.json();
        if(getProductosByCategoria.status == 404) {
		    setErr(true);
		}
		else{
        	setProductos(resultProductosByCategoria);
    	}
        setIsLoading(false)
	}

	useEffect(() => {
        getProductosByCategoriasAPI();
    }, []);

    if (isLoading) 
      	return(
    			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
				    <small position="center" class="error-productos">Cargando...</small>
				</div>);

    if (err) 
    	return(
    			<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
				    <small position="center" class="error-productos">No existen Productos</small>
				</div>);
    else
		return(
			<Container className='mb-6 mt-2'>
				<small position="center" class="todos-productos">{categoria}</small>
				<Row md={5} className="g-4">
					{productos.map( producto => (
						<Col>	
					      <Card style={{ width: '14rem' }}>
							  <Card.Img variant="top" src={"https://res.cloudinary.com/huella-verde-db/image/upload/"+producto.imagen} />
							  <Card.Header></Card.Header>	  
							  <Card.Body>
							    <Card.Title>{producto.nombre_producto}</Card.Title>
							    <Card.Text>
							      {"$"+producto.precio}
							    </Card.Text>
							    <Button variant="success" action href={'/productos/' + producto.id}>Ver Detalles</Button>
							  </Card.Body>
						  </Card>
					    </Col>
				    ))}
				</Row>	
			</Container>	
		);
}

export default ProductosPorCategoria;