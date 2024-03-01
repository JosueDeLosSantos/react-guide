import { useState, useEffect } from "react";

/* ------------------------------useState--------------------------------------------- */

// REACT reacts to state changes

/* useState is the most important hook in REACT */

/* function countInitial() {
	console.log("run code");
	return 0;
} */

export function Counter() {
	// const [count, setCount] = useState(0);
	const [state, setState] = useState({ count: 0, theme: "blue" });
	const count = state.count;
	const theme = state.theme;

	// for slow complex computations on initial state don't do this:
	// const [count, setCount] = useState(countInitial()); // it executes on every render so it slows down your app
	// instead do this:
	// const [count, setCount] = useState(() => countInitial()); // it executes once

	function decrementCout() {
		//setCount((prevCount) => prevCount - 1);
		setState((prevCount) => {
			// use the spread (...) operator to modify objects
			return { ...prevCount, count: prevCount.count - 1 };
		});
	}

	function incrementCount() {
		//setCount((prevCount) => prevCount + 1);
		setState((prevCount) => {
			// use the spread (...) operator to modify objects
			return { ...prevCount, count: prevCount.count + 1 };
		});
	}

	/* 
    The following code will increment our counter by 2
    because when we use the previous value of our setState function,
    the current value is passed along to the next function.

    function incrementCount() {
		setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
	}

    The following code will not decrement our counter by 2
    becase when we do not use the previous value of our setState function
    that is not passed along to the next function, it simply overwrites itself.

    function decrementCout() {
		setCount(count - 1);
		setCount(count - 1);
	}

    the previous value can be accessed through an arrow function like:
    setState((prevState) => prevState + 1);

     */

	// Every time we change our state, react re renders the whole element

	return (
		<div className='counter'>
			<div className='title'>Counter</div>
			<div className='example'>
				<button onClick={decrementCout}>-</button>
				<span>{count}</span>
				<span>{theme}</span>
				<button onClick={incrementCount}>+</button>
			</div>
			<p className='description'>
				Created with <i>useState</i> hook
			</p>
		</div>
	);
}

export function SimpleInput() {
	/* This is a very basic example of the useState hook */

	const [value, setValue] = useState("");

	return (
		<div className='type-box'>
			<div className='title'>Simple input</div>
			<div className='example'>
				<input
					onChange={(e) => setValue(e.target.value)}
					value={value}
					name='name'
					type='text'
				/>{" "}
				<label htmlFor='name'>
					Your name is <b>{value}</b>
				</label>
			</div>
			<p className='description'>
				Created with <i>useState</i> hook
			</p>
		</div>
	);
}

/* ----------------------------------------------------------------------------------------- */

/* ------------------------useEffect------------------------------------------------- */

export function ResourceDisplay() {
	const [resourceType, setResourceType] = useState("users");

	//useEffect generates a side effect whenever something happens.
	//most often than not you will use this hook whenever your component mounts or
	//when a specific resource on your page changes.

	/* useEffect(() => {
		// Everything inside the array function executes after every render if no parameters are added
		console.log("render");
	}); */

	/* useEffect(() => {
		console.log("renders on mount");
        // if the parameters array is empty the effect executes on mount only.
	}, []);  */

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((response) => response.json())
			.then((json) => console.log(json));

		/* the function below is like are clean up function
        whenever our useEffect gets ran, whatever it's in the return
        gets ran first to clean up whatever we did the last time.
        
        when we subscribe to some form of API, our return function should 
        unsubscribe us from that API*/
		return () => {
			console.log("clean up");
		};
	}, [resourceType]); // Our API call will execute every time this parameter changes.

	return (
		<div className='resource-display'>
			<div className='title'>Resource displayer</div>
			<div className='example'>
				<div>
					<button onClick={() => setResourceType("posts")}>Posts</button>
					<button onClick={() => setResourceType("users")}>Users</button>
					<button onClick={() => setResourceType("comments")}>Comments</button>
				</div>
				<h2>{resourceType}</h2>
			</div>
			<p className='description'>
				Created with <i>useEffect</i> hook. See changes on the console.
			</p>
		</div>
	);
}

// the previous example is one of the most basic uses of the useEffect hook
// but it could be more complex than that, see the example below:

export function ResourceDisplay2() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function handleResize() {
		// Update the screen width
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		/* When you add an event listener, after you unmount your component
        you'll want to remove it because otherwise you are going to have
        event listeners that are hooked up and constantly been added but
        never actually removed, which is going to slow down are app.
        but it's easy to do cleanup whenever we have a useEffect, all we need to do
        is: */
		return () => {
			// this function is gonna be called whenever our useEffect is cleaned up.
			window.removeEventListener("resize", handleResize);
		};
	}, []); // add the event listener on mount

	return (
		<div className='resource-display'>
			<div className='title'>Window width display</div>
			<div className='example'>
				<div>{windowWidth}</div>
			</div>
			<p className='description'>
				Created with <i>useEffect</i> hook. update the width of your screen using
				the responsive design mode on the console.
			</p>
		</div>
	);
}

/* 
    CONCLUSION

    basically the best way to think about the useEffect hook is
    that any time that you want to have a side effect occur whether is:
    when your component mounts, when it unmounts, when a variable changes,
    when a state changes, when your props change, when anything updates and you 
    want to do something, this is what useEffect is going to be used for.

*/

/* -------------------------------------------------------------------------- */

/* --------------------------------useContext----------------------------------- */

// the following is the common way of using context...

import ReactContext from "./ReactContext";

export function ContextHook() {
	return (
		<div className='context-display'>
			<div className='title'>Theme Context</div>
			<div className='example'>
				<div>
					<ReactContext />
				</div>
			</div>
			<p className='description'>
				Created with <i>useContext</i> hook. Click the toggle theme button to see
				what happens.
			</p>
		</div>
	);
}
