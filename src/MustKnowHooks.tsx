import { useState } from "react";

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
