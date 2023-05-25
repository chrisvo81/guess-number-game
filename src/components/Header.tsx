import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

type HeaderProps = {
	isLoseGame: boolean;
	resetHandler: () => void;
};

const Header = (props: HeaderProps): JSX.Element => {
	const { guessedNumber, correctNumber } = useStore(useGameStore);

	const { isLoseGame, resetHandler } = props;

	const showNumber = isLoseGame ? correctNumber : '?';

	return (
		<header className='m-6'>
			<div className='flex flex-col items-center justify-between md:flex-row'>
				<button className='btn' onClick={resetHandler}>
					{isLoseGame ? 'Reset' : 'Again!'}
				</button>
				<p className='mt-4 md:mt-0'>(Between 1 and 20)</p>
			</div>
			<div className='flex flex-col items-center justify-between w-full mt-20 text-center'>
				<h1 className=''>Guess A Number!</h1>
				<div className='box'>
					{/* TODO: Hide this until they click on check button */}
					{showNumber}
				</div>
			</div>
		</header>
	);
};

export default Header;
