import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Container, Table, Figure} from 'react-bootstrap';

const DetallesProducto = () => {

	const { id_producto } = useParams();

	const [producto, setProducto] = useState(null);
	const [isLoading, setIsLoading] = useState(true);


	const getProductoByIDAPI = async () => {
		const rutaProductoAPI = 'https://juanbunesapirest.herokuapp.com/productos/id/'+id_producto;
		const getProducto = await fetch(rutaProductoAPI);
        const resultProducto = await getProducto.json();
        setProducto(resultProducto);
        setIsLoading(false)
	}

	useEffect(() => {
        getProductoByIDAPI();
    }, []);

    if (isLoading) 
  		return (
				<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
				    <small position="center" class="error-productos">Cargando...</small>
				</div>);

	return(   
		<Container className='mt-2'>
			{producto.map( prod => (
				<Container>
					<Container >
						<Figure>
						  <Figure.Image
						    width="100%"
						    height="auto"
						    alt={prod.nombre_producto}
						    src={"https://res.cloudinary.com/huella-verde-db/image/upload/"+prod.imagen}
						  />
						</Figure>
						<Figure.Caption>
						    {prod.descripcion}
						</Figure.Caption>
					</Container>
					<Container className='mt-2 mb-4'>
			        	<Table striped bordered hover size="sm">
						  <thead>
						    <tr>
						      <th>Nombre</th>
						      <th>Precio</th>
						      <th>Categoría</th>	
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>{prod.nombre_producto}</td>
						      <td>{prod.precio}</td>
						      <td>{prod.categoria}</td>
						    </tr>
						  </tbody>
						</Table> 
					</Container>
				</Container>
	        ))}
		</Container>
	);
	
}

export default DetallesProducto;