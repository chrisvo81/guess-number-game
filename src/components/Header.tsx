import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

const Header: React.FC = () => {
	const {
		guessedNumber,
		correctNumber,
		setCorrectNumber,
		setMessage,
		setGuessedNumber,
		setScore,
	} = useStore(useGameStore);

	const resetHandler = () => {
		setCorrectNumber();
		setMessage({
			text: 'Start guessing...',
		});
		setGuessedNumber(null);
		setScore(20);
	};

	return (
		<header className='m-6'>
			<div className='flex flex-col items-center justify-between md:flex-row'>
				<button className='btn' onClick={resetHandler}>
					Again!
				</button>
				<p className='mt-4 md:mt-0'>(Between 1 and 20)</p>
			</div>
			<div className='flex flex-col items-center justify-between w-full mt-20 text-center'>
				<h1 className=''>Guess A Number!</h1>
				<div className='box'>
					{/* TODO: Hide this until they click on check button */}
					{guessedNumber === correctNumber ? correctNumber : '?'}
				</div>
			</div>
		</header>
	);
};

export default Header;
