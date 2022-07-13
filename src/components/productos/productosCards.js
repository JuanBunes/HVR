import React, { Component } from 'react';
import {Card, Container, Button, Row, Col} from 'react-bootstrap';

class ProductosCards extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        productos: [],
	        err: null,
	        isLoading: false
	    }
	}

	componentDidMount() {
	  this.setState({ isLoading: true })
	  let api_url = 'https://juanbunesapirest.herokuapp.com/productos/';
	  fetch(api_url)
		  .then(res => {
		      if(res.status >= 400) {
		          throw new Error("Error de Servidor!");
		      }
		      return res.json();
		  })
		  .then(productos => {
		      this.setState({
		          productos,
		          isLoading: false
		      })
		  },
		  err => {
		      this.setState({
		          err,
		          isLoading: false
		      })
		});
	}

	render() {
		let {productos, err, isLoading} = this.state;
		if (isLoading) 
      		<small position="center" class="error-productos">Cargando...</small>
		return(
			<Container className='mb-6 mt-2'>
				<small position="center" class="todos-productos">Todos los productos</small>
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
}

export default ProductosCards;