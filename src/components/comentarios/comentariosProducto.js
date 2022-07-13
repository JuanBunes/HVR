import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {Container, Accordion, Button, Form} from 'react-bootstrap';

const ComentariosProducto = () => {

	const { id_producto } = useParams();
	const {isAuthenticated,user,getAccessTokenSilently, getIdTokenClaims} = useAuth0();
	
	
	const [comentarios, setComentarios] = useState(null);
	const [comentarioNuevo, setComentarioNuevo] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(false);
	const [permisos, setPermisos] = useState();
	const [creado, setCreado] = useState(false);



	const getComentariosProductoAPI = async () => {
		const rutaComentariosProductoAPI = 'https://juanbunesapirest.herokuapp.com/comentarios/producto/'+id_producto;
		const getComentariosProducto = await fetch(rutaComentariosProductoAPI);
        const resultProducto = await getComentariosProducto.json();
        setComentarios(resultProducto);
        if(getComentariosProducto.status == 404) {
		    setErr(true);
		}
		else{
        	setComentarios(resultProducto);
    	}
        setIsLoading(false);

        //Setea permisos
        const accessToken = await getAccessTokenSilently();
	    const idToken = await getIdTokenClaims();
	    setPermisos(idToken["https://my-app.example.com/roles"][0]);  
	   		   	
	}


	useEffect(() => {
        getComentariosProductoAPI();
    }, []);

    const enviarComentario = async (e) => {
    	e.preventDefault();
    	const accessToken = await getAccessTokenSilently();
    	const response = await fetch('https://juanbunesapirest.herokuapp.com/comentarios/crear/'+id_producto, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
				  "comentario": comentarioNuevo,
				  "autor": user.name,
				  "email": user.email
				})
        });
        if(response.status!=200){
        	setCreado(false);
        }
        else{
	        setCreado(true);    
    	}
    }




    if (isLoading) 
  		return (
				<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '150vh'}}>
				    <small position="center" class="error-productos">Cargando...</small>
				</div>);
  	if (err) 
  		//Sin loguear
  		if(!isAuthenticated)
	    	return(
	    		<Container className='mt-3 mb-6'>
	    			<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
						<small class="error-productos">Inicia sesion para dejar tu comentario</small>
					</div>		
	    			<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
						<small class="error-productos">No hay comentarios del producto</small>
					</div>
	    		</Container>);
	    else
	    	//Logueado
	    	return(
	    		<Container className='mt-3 mb-6'>
		    		<div className='mb-5'>
						<Form onSubmit={enviarComentario}>
					      <Form.Group className="mb-3" controlId="formBasicEmail">
					        <Form.Label>Escribí tu comentario:</Form.Label>
					        <Form.Control as="textarea" rows={3} onChange={(e) => setComentarioNuevo(e.target.value)} placeholder="Comentario" />
					      </Form.Group>
					      <Button variant="success" type="submit">
					        Enviar Comentario
					      </Button>
					      <div className='mt-2'>
						      <Form.Label>
							     {creado ? 'Comentario Creado!' : ''}
							  </Form.Label>
						  </div>
					    </Form>
					</div>
		    		<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
						<small class="error-productos">No hay comentarios del producto</small>
					</div>
				</Container>
	    	);
    else{
    	//Sin loguear
    	if(!isAuthenticated){
    		return(   
				<Container className='mt-5 mb-6'>
					<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
						<small class="error-productos">Inicia sesion para dejar tu comentario</small>
					</div>				    
					<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
						<small class="error-productos">Comentarios del producto:</small>
					</div>
					{comentarios.map( comentario => (
						<Container className='mb-4'>
							<Accordion defaultActiveKey="0">
							  <Accordion.Item eventKey="0">
							    <Accordion.Header>{comentario.autor} dice:</Accordion.Header>
							    <Accordion.Body>
							      {comentario.comentario}
							    </Accordion.Body>
							  </Accordion.Item>
							</Accordion>
						</Container>
					))}
				</Container>
			);
    	}
    	else{
    		//Logueado como usuario normal
	    	if(permisos!=="Moderador")
				return(   
					<Container className='mt-5 mb-6'>
						<div className='mb-5 containerBorde'>
							<div className='mx-2'>
								<Form onSubmit={enviarComentario}>
							      <Form.Group className="mb-3" controlId="formBasicEmail">
							        <Form.Label>Escribí tu comentario:</Form.Label>
							        <Form.Control as="textarea" rows={3} onChange={(e) => setComentarioNuevo(e.target.value)} placeholder="Comentario" />
							      </Form.Group>
							      <Button variant="success" type="submit">
							        Enviar Comentario
							      </Button>
							      <div className='mt-2'>
								      <Form.Label>
									     {creado ? 'Comentario Creado!' : ''}
									  </Form.Label>
								  </div>
							    </Form>
							</div>
					    </div>

						<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
							<small class="error-productos">Comentarios del producto:</small>
						</div>
						{comentarios.map( comentario => (
							<Container className='mb-4'>
								<Accordion defaultActiveKey="0">
								  <Accordion.Item eventKey="0">
								    <Accordion.Header>{comentario.autor} dice:</Accordion.Header>
								    <Accordion.Body>
								      {comentario.comentario}
								    </Accordion.Body>
								  </Accordion.Item>
								</Accordion>
							</Container>
						))}
					</Container>
				);
			else
				//Logueado como Moderador
				return(
					<Container className='mt-5 mb-6'>
						<div className='mb-5 containerBorde'>
							<div className='mx-2'>
								<Form onSubmit={enviarComentario}>
							      <Form.Group className="mb-3" controlId="formBasicEmail">
							        <Form.Label>Escribí tu comentario:</Form.Label>
							        <Form.Control as="textarea" rows={3} onChange={(e) => setComentarioNuevo(e.target.value)} placeholder="Comentario" />
							      </Form.Group>
							      <Button variant="success" type="submit">
							        Enviar Comentario
							      </Button>
								  <div className='mt-2'>
								    <Form.Label>
									    {creado ? 'Comentario Creado!' : ''}
									</Form.Label>
								  </div>
							    </Form>
						    </div>
					    </div>

						<div className='mb-3 ml-6' style={{display: 'flex', justifyContent:'left'}}>
							<small class="error-productos">Comentarios del producto:</small>
						</div>
						{comentarios.map( comentario => (
							<Container className='mb-4'>
								<Accordion defaultActiveKey="0">
								  <Accordion.Item eventKey="0">
								    <Accordion.Header>{comentario.autor} dice:</Accordion.Header>
								    <Accordion.Body>
								      {comentario.comentario}
								    </Accordion.Body>
								  </Accordion.Item>
								</Accordion>
								<Button action href={'/comentario/editar/' + comentario.id} variant="warning">Editar</Button>
								<Button action href={'/comentario/eliminar/' + comentario.id} variant="danger">Eliminar</Button>
							</Container>
						))}
					</Container>
				);
		}
	}
	
}

export default ComentariosProducto;