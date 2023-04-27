import * as React from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

const Header: React.FC = () => {
	const { guessedNumber, correctNumber, setCorrectNumber } =
		useStore(useGameStore);

	return (
		<header>
			<h1>Guess A Number!</h1>
			<p>(Between 1 and 20)</p>
			<button onClick={setCorrectNumber}>Again!</button>
			<div>{guessedNumber === correctNumber ? correctNumber : '?'}</div>
		</header>
	);
};

export default Header;
