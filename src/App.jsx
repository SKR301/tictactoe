import { useState } from 'react'

import TopHeader from './component/TopHeader'
import TheTicTacToe from './component/TheTicTacToe'
import TicTacToe2 from './component/TicTacToe2'
import TicTacToe3 from './component/TicTacToe3'

const App = () => {
	// document.body.style.backgroundColor = '#222222'
	const [game_type, setGameType] = useState('New')

	const handleGetGameType = (curr_game_type) => {
		setGameType(curr_game_type)
	}

	let main_element
	if(game_type == "TheTicTacToe"){
		main_element = <TheTicTacToe />
	}
	if(game_type == "tictactoe2"){
		main_element = <TicTacToe2 />

	}
	if(game_type == "tictactoe3"){
		main_element = <TicTacToe3 />
	}

	return (
		<div>
			<TopHeader selectGameType={handleGetGameType} />
			{ main_element }
		</div>
	)
}

export default App
