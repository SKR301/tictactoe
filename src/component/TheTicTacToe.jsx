import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TheTicTacToe = () => {
	const val_x = 'X'
	const val_o = 'O'
	const val_blank = ' '
	
	const [cell_values, setCellValues] = useState([
		[val_blank, val_blank, val_blank],
		[val_blank, val_blank, val_blank],
		[val_blank, val_blank, val_blank]
	])

	const handleCellClick = (e) => {
		const id = console.log(e.target.id);
		const row = id.substr(4)[0]
		const col = id.substr(4)[2]

		//check curr state of cell

		//update state val however req

		//check if game ends and decl winner
		
	}

	return (
		<div>
			<Container>
				<Row id='row0' className=''>
					<Col id='col00' onClick={handleCellClick}>{cell_values[0][0]}</Col>
					<Col id='col01' onClick={handleCellClick}>{cell_values[0][1]}</Col>
					<Col id='col02' onClick={handleCellClick}>{cell_values[0][2]}</Col>
				</Row>
				<Row id='row1'>
					<Col id='col10' onClick={handleCellClick}>{cell_values[1][0]}</Col>
					<Col id='col11' onClick={handleCellClick}>{cell_values[1][1]}</Col>
					<Col id='col12' onClick={handleCellClick}>{cell_values[1][2]}</Col>
				</Row>
				<Row id='row2'>
					<Col id='col20' onClick={handleCellClick}>{cell_values[2][0]}</Col>
					<Col id='col21' onClick={handleCellClick}>{cell_values[2][1]}</Col>
					<Col id='col22' onClick={handleCellClick}>{cell_values[2][2]}</Col>
				</Row>
			</Container>
		</div>
	)
}

export default TheTicTacToe
