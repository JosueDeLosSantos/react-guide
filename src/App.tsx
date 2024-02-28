import "./App.css";
import { Counter, SimpleInput } from "./MustKnowHooks";

function App() {
	return (
		<>
			<h1>React guide</h1>
			<section className='must-know-hooks'>
				<h2>Must Know Hooks</h2>
				<Counter />
				<SimpleInput />
			</section>
		</>
	);
}

export default App;
