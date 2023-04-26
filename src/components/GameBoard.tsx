import * as React from 'react';
import { useState } from 'react';
import { useStore } from 'zustand';

import { useGameStore } from '../store';

const GameBoard: React.FC = () => {
	// destructing store
	const {
		correctNumber,
		guessedNumber,
		score,
		message,
		setMessage,
		setGuessedNumber,
		setCorrectNumber,
		setScore,
	} = useStore(useGameStore);

	return <></>;
};

export default GameBoard;
