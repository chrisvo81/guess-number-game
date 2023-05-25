import { useStore } from 'zustand';
import { useGameStore } from './store';
import { msgList } from './components/helpers';

import './App.css';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	const {
		score,
		guessedNumber,
		correctNumber,
		setCorrectNumber,
		setGuessedNumber,
		setMessage,
		setScore,
		setScoreList,
		resetScores,
	} = useStore(useGameStore);

	const isGameLose = score <= 1;

	const resetHandler = () => {
		setCorrectNumber();
		setMessage({
			text: 'Start guessing...',
		});
		setGuessedNumber(null);
		setScore(20);
		isGameLose && resetScores();
	};

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
			setScoreList(score);
			gameWin();
		}
	};

	const gameWin = () => {
		setMessage(msgList.correctInput);
	};

	// TODO: fix style so that footer is at bottom
	return (
		<div className='flex flex-col min-h-screen'>
			<Header isLoseGame={isGameLose} resetHandler={resetHandler} />
			<GameBoard gameHandler={gameHandler} />
			<Footer />
		</div>
	);
};

export default App;
