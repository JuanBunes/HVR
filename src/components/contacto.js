import React from 'react';
import {Container} from 'react-bootstrap';

const Contacto = () => {

	return(
		<Container className='mt-2'>
			<h3 style={{color: '#126e1b'}}>
				Podes contactarnos en:
			</h3>
			<div className="divContacto">
				<img
					className="d-block w-100"
					src="/contacto.png"
					alt="Imagen Contacto"
				/>
			</div>
			
		</Container>
	);	
}

export default Contacto;