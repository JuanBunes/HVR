import React from "react";
import { Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import LoginLink from '../auth0/loginAuth0';
import LogoutLink from '../auth0/logoutAuth0';
import ProfileName from '../auth0/profileNameAuth0';
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
	const {
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  


  if(isLoading){
  	return(
  		<Navbar className="navbar-success" expand="lg" style={{fontSize: 20}} sticky="top">
		  <div class="container-fluid g-0">
		    <Navbar.Brand href="/">
		    <img
	        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXMApaS7qrBrAXpvsbFdaomdZf26iNFtl3g&usqp=CAU"
	        width="50"
	        height="50"
	        className="d-inline-block align-top"
	        alt="Huella Verde logo"
      	/>
      	</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link href="/">Inicio</Nav.Link>
		        <Nav.Link href="/productos">Productos</Nav.Link>
		        <Nav.Link href="/contacto">Contactanos</Nav.Link>
		        <Nav.Link disabled>Cargando...</Nav.Link>	
		      </Nav>
		    </Navbar.Collapse>
		  </div>
		</Navbar>
  	);
  }
  else{
  	if(isAuthenticated){
		  return (
				<Navbar className="navbar-success" expand="lg" variant="light" style={{fontSize: 20}} sticky="top">
				  <div class="container-fluid g-0">
				    <Navbar.Brand href="/">
				    <img
			        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXMApaS7qrBrAXpvsbFdaomdZf26iNFtl3g&usqp=CAU"
			        width="50"
			        height="50"
			        className="d-inline-block align-top"
			        alt="Huella Verde logo"
		      	/>
		      	</Navbar.Brand>
				    <Navbar.Toggle aria-controls="basic-navbar-nav" />
				    <Navbar.Collapse id="basic-navbar-nav">
				      <Nav className="me-auto">
				        <Nav.Link href="/">Inicio</Nav.Link>
				        <Nav.Link href="/productos">Productos</Nav.Link>
				        <Nav.Link href="/contacto">Contactanos</Nav.Link>
				        <NavDropdown title={"Hola, "+user.nickname+"!"} id="basic-nav-dropdown">
				          <NavDropdown.Item><LogoutLink/></NavDropdown.Item>
				        </NavDropdown>
				      </Nav>
				    </Navbar.Collapse>
				  </div>
				</Navbar>
		  ); 
		}
		else{
			return(
				<Navbar className="navbar-success" expand="lg" style={{fontSize: 20}} sticky="top">
				  <div class="container-fluid g-0">
				    <Navbar.Brand href="/">
				    <img
			        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXMApaS7qrBrAXpvsbFdaomdZf26iNFtl3g&usqp=CAU"
			        width="50"
			        height="50"
			        className="d-inline-block align-top"
			        alt="Huella Verde logo"
		      	/>
		      	</Navbar.Brand>
				    <Navbar.Toggle aria-controls="basic-navbar-nav" />
				    <Navbar.Collapse id="basic-navbar-nav">
				      <Nav className="me-auto">
				        <Nav.Link href="/">Inicio</Nav.Link>
				        <Nav.Link href="/productos">Productos</Nav.Link>
				        <Nav.Link href="/contacto">Contactanos</Nav.Link>
				        <Nav.Link><LoginLink/></Nav.Link>	
				      </Nav>
				    </Navbar.Collapse>
				  </div>
				</Navbar>
			);
		}
	}
}

export default NavBar;