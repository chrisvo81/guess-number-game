import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

const Header: React.FC = () => {
	const { guessedNumber, correctNumber, setCorrectNumber } =
		useStore(useGameStore);

	return (
		<header className='relative'>
			<h1 className='absolute w-full text-center'>Guess A Number!</h1>
			<p className='absolute between'>(Between 1 and 20)</p>
			<button className='btn again' onClick={setCorrectNumber}>
				Again!
			</button>
			<div>{guessedNumber === correctNumber ? correctNumber : '?'}</div>
		</header>
	);
};

export default Header;
