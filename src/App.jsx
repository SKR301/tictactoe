import { useState } from 'react'

import './App.css'
import TopHeader from './component/TopHeader'

function App() {
	document.body.style.backgroundColor = '#222222';
	const [game_type, setGameType] = useState('New');

	const handleGetGameType = (curr_game_type) => {
		setGameType(curr_game_type)
	}

	let main_element
	if(game_type == "tictactoe1"){
		main_element = <p>tictactoe1</p>
	}
	if(game_type == "tictactoe2"){
		main_element = <p>tictactoe2</p>
	}
	if(game_type == "tictactoe3"){
		main_element = <p>tictactoe3</p>
	}

	return (
		<div>
			<TopHeader selectGameType={handleGetGameType} />
			{ main_element }
		</div>
	)
}

export default App
