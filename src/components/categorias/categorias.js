import React, { Component } from 'react';
import {List, Button, ButtonGroup, ListGroup, Container, Nav} from 'react-bootstrap';

class Categorias extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        categorias: [],
	        err: null,
	        isLoading: false
	    }
	}

	componentDidMount() {
	  this.setState({ isLoading: true })
	  let api_url = 'https://juanbunesapirest.herokuapp.com/categorias/';
	  fetch(api_url)
		  .then(res => {
		      if(res.status >= 400) {
		          throw new Error("Error de Servidor!");
		      }
		      return res.json();
		  })
		  .then(categorias => {
		      this.setState({
		          categorias,
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
		let {categorias, err, isLoading} = this.state;
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
					<Nav defaultActiveKey="/home" className="navbar-categorias flex-column (no expand class)">
						<hr/>
						<Nav.Link className="navlink-categoria-titulo" eventKey="disabled" disabled><b>Categorías</b></Nav.Link>
						<hr/>
						{categorias.map( categoria => (
			                <Nav.Link action href={'/categoria/' + categoria.nombre_categoria} style={{fontSize: 18}}>{categoria.nombre_categoria}</Nav.Link>
			            ))}
					</Nav>     
				</div>
		);
	}
}

export default Categorias;