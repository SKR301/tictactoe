import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TheTicTacToe = () => {
	const val_x = 'X';
	const val_o = 'O';
	const val_blank = ' ';
	
	const [cell_values, setCellValues] = useState([
		[val_blank, val_blank, val_blank],
		[val_blank, val_blank, val_blank],
		[val_blank, val_blank, val_blank]
	]);
	const [curr_move, setCurrMove] = useState(val_o);

	const checkWinner = () => {
		if(cell_values[0][0] == cell_values[0][1] && cell_values[0][0] == cell_values[0][2] && cell_values[0][0] != val_blank){
			return cell_values[0][0];
		}
		if(cell_values[1][0] == cell_values[1][1] && cell_values[1][0] == cell_values[1][2] && cell_values[1][0] != val_blank){
			return cell_values[1][0];
		}
		if(cell_values[2][0] == cell_values[2][1] && cell_values[2][0] == cell_values[2][2] && cell_values[2][0] != val_blank){
			return cell_values[2][0];
		}
		
		if(cell_values[0][0] == cell_values[1][0] && cell_values[0][0] == cell_values[2][0] && cell_values[0][0] != val_blank){
			return cell_values[0][0];
		}
		if(cell_values[0][1] == cell_values[1][1] && cell_values[0][1] == cell_values[2][1] && cell_values[0][1] != val_blank){
			return cell_values[0][1];
		}
		if(cell_values[0][2] == cell_values[1][2] && cell_values[0][2] == cell_values[2][2] && cell_values[0][2] != val_blank){
			return cell_values[0][2];
		}

		if(cell_values[0][0] == cell_values[1][1] && cell_values[0][0] == cell_values[2][2] && cell_values[0][0] != val_blank){
			return cell_values[1][1];
		}
		if(cell_values[2][0] == cell_values[1][1] && cell_values[2][0] == cell_values[0][2] && cell_values[2][0] != val_blank){
			return cell_values[1][1];
		}

		return null;
	}

	const handleCellClick = (e) => {
		const id = e.target.id;
		const row = id.substr(3)[0];
		const col = id.substr(3)[1];

		//check curr state of cell
		if(cell_values[row][col] != val_blank){
			return;
		}

		//update state val however req
		let new_cell_values = cell_values;
		new_cell_values[Number(row)][Number(col)] = curr_move;
		setCellValues(new_cell_values);
		
		(curr_move == val_o)? setCurrMove(val_x): setCurrMove(val_o);
	
		//check if game ends and decl winner
		const winner = checkWinner();
		if(winner){
			console.log('not null');
		} else {
			console.log('null');
		}
	}

			// TODO: add design
	return (
		<div>
			<Container>
				<Row id='row0' className=''>
					<Col id='col00' onClick={handleCellClick}>|{cell_values[0][0]}|</Col>
					<Col id='col01' onClick={handleCellClick}>|{cell_values[0][1]}|</Col>
					<Col id='col02' onClick={handleCellClick}>|{cell_values[0][2]}|</Col>
				</Row>
				<Row id='row1'>
					<Col id='col10' onClick={handleCellClick}>|{cell_values[1][0]}|</Col>
					<Col id='col11' onClick={handleCellClick}>|{cell_values[1][1]}|</Col>
					<Col id='col12' onClick={handleCellClick}>|{cell_values[1][2]}|</Col>
				</Row>
				<Row id='row2'>
					<Col id='col20' onClick={handleCellClick}>|{cell_values[2][0]}|</Col>
					<Col id='col21' onClick={handleCellClick}>|{cell_values[2][1]}|</Col>
					<Col id='col22' onClick={handleCellClick}>|{cell_values[2][2]}|</Col>
				</Row>
			</Container>
		</div>
	)
}

export default TheTicTacToe
