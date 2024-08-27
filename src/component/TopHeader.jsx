import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopHeader() {
	const [game_types, setGameType] = useState([
		"tictactoe1", 
		"tictactoe2", 
		"tictactoe3"
	])

	return (
		<Navbar expand='lg' className='bg-body-tertiary' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='#home'>{APP_NAME}</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<NavDropdown title='Dropdown' id='drop_sel_game_type'>
							{
								game_types.map(game_type => (
									<NavDropdown.Item eventKey="4.1" key={game_type}>{game_type}</NavDropdown.Item>
								))
							}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopHeader;