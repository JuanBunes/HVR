import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {List, Button, ButtonGroup, ListGroup, Container, Nav} from 'react-bootstrap';

const EliminarComentario = () => {

	const { id_comentario } = useParams();

	const [err, setErr] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const {getAccessTokenSilently} = useAuth0();

	/*
	useEffect(() => {
    	const accessToken =  getAccessTokenSilently();
    	console.log(accessToken);
    	console.log(`Bearer ${accessToken}`);
        fetch('https://juanbunesapirest.herokuapp.com/comentarios/eliminar/'+id_comentario, { 
        	method: 'DELETE' ,
        	headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
        })
        	.then(() => setErr(true));

	}, []);
	*/

	
	useEffect(() => {
    	eliminarComentario();
	}, []);

	const eliminarComentario = async () => {
    	const accessToken = await getAccessTokenSilently();
    	const response = await fetch('https://juanbunesapirest.herokuapp.com/comentarios/eliminar/'+id_comentario, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`
            },
        });
        if(response.status==200){
        	setErr(false);
        	setIsLoading(false);
        }
        if(response.status==403){
        	setErr(true)
        	setIsLoading(false);
        }
    }
 


    if(isLoading==true){
		return(   
			<div>
				<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
					    <small position="center" class="error-productos">Cargando...</small>
				</div>  
			</div>
		);
    }
    else{
	    if (err==false) 
	  		return (
					<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
					    <small position="center" class="error-productos">Comentario Eliminado</small>
					</div>
	  		);
	  	else
			return(   
				<div>
					<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
						    <small position="center" class="error-productos">Error 403: Sin autorizacion</small>
					</div>  
				</div>
			);
	}
	
}

export default EliminarComentario;