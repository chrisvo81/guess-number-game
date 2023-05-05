import './App.css';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	// TODO: fix style so that footer is at bottom
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<GameBoard />
			<Footer />
		</div>
	);
};

export default App;
