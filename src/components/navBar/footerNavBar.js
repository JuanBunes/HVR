import React from "react";
import { Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

function FooterNavBar() {
	return (
			<Navbar className="navbar-success-flipped" fixed="bottom" style={{fontSize: 20}}>
				  <Nav>
				  	<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				  	<Navbar.Collapse id="basic-navbar-nav">
					    <Nav.Link eventKey="disabled" disabled>
					        Seguinos en:
					    </Nav.Link>
					    	<Navbar.Brand href="https://www.instagram.com/">
							    <img
							        src="https://img.icons8.com/ios/50/undefined/instagram-new--v1.png"
							        width="50"
							        height="50"
							        className="d-inline-block align-top"
							        alt="Huella Verde Instagram"
					      		/>
			      			</Navbar.Brand>
			      			<Navbar.Brand href="https://www.facebook.com/">
							    <img
							        src="https://img.icons8.com/ios/50/undefined/facebook--v1.png"
							        width="50"
							        height="50"
							        className="d-inline-block align-top"
							        alt="Huella Verde Facebook"
					      		/>
			      			</Navbar.Brand>
			      			<Navbar.Brand href="https://www.youtube.com/">
							    <img
							        src="https://img.icons8.com/ios/50/undefined/youtube-play--v1.png"
							        width="50"
							        height="50"
							        className="d-inline-block align-top"
							        alt="Huella Verde Youtube"
					      		/>
			      			</Navbar.Brand>
					    </Navbar.Collapse>
				    </Nav>		  
			</Navbar>
		
	)
}

export default FooterNavBar;
