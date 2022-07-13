import React, { useState } from 'react';
import { useParams, Link, Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {Form, Button} from 'react-bootstrap';


const EditarComentario = () => {

	const { id_comentario } = useParams();
	const {user,getAccessTokenSilently, getIdTokenClaims} = useAuth0();

	const [edited, setEdited] = useState(false);
	const [comentarioNuevo, setComentarioNuevo] = useState('');
	const [autorNuevo, setAutorNuevo] = useState('');

	const navigate = useNavigate();


	const editarComentario = async (e) => {
		e.preventDefault();
    	const accessToken = await getAccessTokenSilently();
    	const response = await fetch('https://hvnjs.herokuapp.com/comentarios/editar/'+id_comentario, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
				  "comentario": comentarioNuevo,
				  "autor": autorNuevo,
				  "email": user.email
				})
        });
        if(response.status!=200){
        	setEdited(false);
        }
        else{
	        setEdited(true);    
    	}
    }
 

	return(   
		<div className='mt-5 mx-5'>
			<div className='mb-5'>
				<Button variant="danger" onClick={() => navigate(-1)}>Volver</Button>
			</div>
			<Form onSubmit={editarComentario}>
		      <Form.Group className="mb-3" controlId="formBasicEmail">
		        <Form.Label>Editando comentario:</Form.Label>
		        <Form.Control onChange={(e) => setAutorNuevo(e.target.value)} placeholder="Autor" />
		        <Form.Control as='textarea' rows={3} onChange={(e) => setComentarioNuevo(e.target.value)} placeholder="Comentario" />
		      </Form.Group>
		      <Button variant="success" type="submit">
		        Enviar Comentario
		      </Button>
		    </Form>
		    <div className='mt-3'>
			    <Form.Label>
			      {edited ? 'Editado!' : ''}
			    </Form.Label>
			</div>
		</div>
	);
	
}

export default EditarComentario;