import { useContext } from "react";
import { ThemeContext } from "./ReactContext"; // the context is imported to the children

export function FunctionContextComponent() {
	// useContext extracts the value of ThemeContext which is darktheme
	const darkTheme = useContext(ThemeContext);
	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
	};
	return <div style={themeStyles}>Function theme</div>;
}
