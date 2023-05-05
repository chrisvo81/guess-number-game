import create from 'zustand/vanilla';
import type { Message } from './types';

export type GameState = {
	message: Message;
	correctNumber: number;
	guessedNumber: number | null;
	score: number;
	highest: number;

	setMessage: (message: Message) => void;
	setCorrectNumber: () => void;
	setGuessedNumber: (number: number | null) => void;
	setScore: (score: number) => void;
	setHighest: () => void;
};

export const useGameStore = create<GameState>((set) => ({
	message: {
		text: 'Start guessing...',
	},
	correctNumber: Math.trunc(Math.random() * 20) + 1,
	guessedNumber: null,
	score: 20,
	highest: 0,

	setMessage: (message) => set({ message: message }),
	setCorrectNumber: () => {
		const randNumber = Math.trunc(Math.random() * 20) + 1;
		set({ correctNumber: randNumber });
	},
	setGuessedNumber: (number) => set({ guessedNumber: number }),
	setScore: (score) => set({ score: score }),
	setHighest: () => {
		// TODO: set highest score correctly
	},
}));
