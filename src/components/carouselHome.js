import React from 'react';
import {Carousel,Container} from 'react-bootstrap';

const carouselHome = () => {

	return(
		<Container className='mt-2'>
			<Carousel>
			  <Carousel.Item>
			  	<a href="/">
				    <img
				      className="d-block w-100"
				      src="/Banner1.webp"
				      alt="Slide Bienvenida"
				    />
			    </a>
			  </Carousel.Item>
			  <Carousel.Item>
			  	<a href="/productos/">
				    <img
				      className="d-block w-100"
				      src="/Banner2.webp"
				      alt="Slide Oferta"
				    />
			    </a>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="/Banner3.webp"
			      alt="Slide PlaceHolder"
			    />
			  </Carousel.Item>
			</Carousel>
		</Container>
	);	
}

export default carouselHome;