import create from 'zustand/vanilla';

export type GameState = {
	message: string;
	correctNumber: number;
	guessedNumber: number | null;
	score: number;

	setMessage: (message: string) => void;
	setCorrectNumber: () => void;
	setGuessedNumber: (number: number | null) => void;
	setScore: (score: number) => void;
};

export const useGameStore = create<GameState>((set) => ({
	message: 'Start guessing...',
	correctNumber: Math.trunc(Math.random() * 20) + 1,
	guessedNumber: null,
	score: 20,

	setMessage: (message) => set({ message: message }),
	setCorrectNumber: () => {
		const randNumber = Math.trunc(Math.random() * 20) + 1;
		set({ correctNumber: randNumber });
	},
	setGuessedNumber: (number) => set({ guessedNumber: number }),
	setScore: (score) => set({ score: score }),
}));
