import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

const Header: React.FC = () => {
	const { guessedNumber, correctNumber, setCorrectNumber } =
		useStore(useGameStore);

	return (
		<header className='m-4'>
			<div className='flex flex-col items-center justify-between md:flex-row'>
				<button className='btn' onClick={setCorrectNumber}>
					Again!
				</button>
				<p className='mt-4 md:mt-0'>(Between 1 and 20)</p>
			</div>

			<h1 className='w-full mt-20 text-center'>Guess A Number!</h1>
			{/* <div>{guessedNumber === correctNumber ? correctNumber : '?'}</div> */}
		</header>
	);
};

export default Header;
