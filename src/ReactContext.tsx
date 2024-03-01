import React, { useState } from "react";
import { FunctionContextComponent } from "./FunctionContextComponent";

export const ThemeContext = React.createContext(true); // Creates context and TS requires a default value

export default function ReactContext() {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkThem) => !prevDarkThem);
	}

	return (
		<>
			{/* the context receives a single value and it's passed down
            to all of its children without the need of prop drilling */}
			<ThemeContext.Provider value={darkTheme}>
				<button onClick={toggleTheme}>Toggle Theme</button>
				<FunctionContextComponent />
			</ThemeContext.Provider>
		</>
	);
}
