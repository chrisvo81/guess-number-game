import './App.css';
import GameBoard from './components/GameBoard';
import Header from './components/Header';

const App = () => {
	// const {
	// 	correctNumber,
	// 	guessedNumber,
	// 	score,
	// 	message,
	// 	setMessage,
	// 	setGuessedNumber,
	// 	setCorrectNumber,
	// 	setScore,
	// } = useStore(useGameStore);

	return (
		<>
			<Header />
			<GameBoard />
		</>
	);
};

export default App;
