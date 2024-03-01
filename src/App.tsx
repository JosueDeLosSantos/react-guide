import "./App.css";
import {
	Counter,
	SimpleInput,
	ResourceDisplay,
	ResourceDisplay2,
	ContextHook,
} from "./MustKnowHooks";
import SideBar from "./SideBar";

function App() {
	return (
		<>
			<SideBar />
			<main>
				<h1>React guide</h1>
				<section className='must-know-hooks'>
					<h2>Must Know Hooks</h2>
					<Counter />
					<SimpleInput />
					<ResourceDisplay />
					<ResourceDisplay2 />
					<ContextHook />
				</section>
			</main>
		</>
	);
}

export default App;
