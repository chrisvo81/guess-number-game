import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';
import { msgList } from './helpers';

const GameBoard: React.FC = () => {
	const {
		guessedNumber,
		correctNumber,
		message,
		score,
		setGuessedNumber,
		setMessage,
		setScore,
	} = useStore(useGameStore);

	const gameHandler = () => {
		if (score <= 1) {
			setMessage(msgList.loseGame);
		} else {
			checkNumber();
		}
	};

	const checkNumber = () => {
		if (!guessedNumber) {
			setMessage(msgList.noInput);
		} else if (guessedNumber > correctNumber) {
			setScore(score - 1);
			setMessage(msgList.inputHigher);
		} else if (guessedNumber < correctNumber) {
			setScore(score - 1);
			setMessage(msgList.inputLower);
		} else {
			uWon();
		}
	};

	const uWon = () => {
		setMessage(msgList.correctInput);
	};

	return (
		<main className='flex flex-row items-center justify-center mx-6 space-x-7 mt-14'>
			<div className='flex flex-col items-center justify-center space-y-6'>
				<input
					className='w-40 number'
					type='number'
					value={guessedNumber ?? ''}
					onChange={(e) => setGuessedNumber(parseInt(e.target.value))}
				/>
				<button className='btn' onClick={gameHandler}>
					Check!
				</button>
			</div>
			<div>
				<h2 className='text-xl align-top'>{message.text}</h2>
				<div className='mt-10'>
					<p>
						💯 Score: <span>{score}</span>
					</p>
					<p>
						🥇 Highest: <span>0</span>
					</p>
				</div>
			</div>
		</main>
	);
};

export default GameBoard;
