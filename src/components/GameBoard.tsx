import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

const GameBoard: React.FC = () => {
	const { guessedNumber, message, score, setGuessedNumber } =
		useStore(useGameStore);

	return (
		<main>
			<section>
				<input
					type='number'
					value={guessedNumber ?? ''}
					onChange={(e) => setGuessedNumber(parseInt(e.target.value))}
				/>
				<button
					className='btn'
					onClick={() => {
						// TODO: Logic for checking the guessedNumber goes here
					}}
				>
					Check!
				</button>
			</section>
			<section>
				<p>{message.text}</p>
				<p>
					💯 Score: <span>{score}</span>
				</p>
				<p>
					🥇 Highscore: <span>0</span>
				</p>
			</section>
		</main>
	);
};

export default GameBoard;
