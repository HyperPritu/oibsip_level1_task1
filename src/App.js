import './App.css';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<About />
			<Testimonials />
			<Projects/>
			<Footer/>
		</>
	);
}

export default App;
