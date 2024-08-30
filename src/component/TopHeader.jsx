import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopHeader = ({selectGameType}) => {
	const [game_types, setGameType] = useState([
		"TheTicTacToe", 
		"tictactoe2", 
		"tictactoe3"
	])
	
	const handleGameDropdownChange = (curr_game_type) => {
		selectGameType(curr_game_type)
	}

	return (
		<Navbar expand='lg' className='bg-body-tertiary' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand href='#home'>{APP_NAME}</Navbar.Brand>
				<Navbar.Toggle aria-controls='collapse_navbar' />
				<Navbar.Collapse id='collapse_navbar'>
					<Nav>
						<Nav.Link href='#home'>Home</Nav.Link>
						<NavDropdown title='Game' id='drop_sel_game_type'>
							{
								game_types.map((game_type, index) => (
									<NavDropdown.Item key={index} onClick={()=>handleGameDropdownChange(game_type)}>
										{game_type}
									</NavDropdown.Item>
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