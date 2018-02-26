function sayMyName(name) {
	 console.log("Hi, " + name);
}
function dispatchName(passenger,fn) {
	fn(passenger);
}

dispatchName("Feliece",sayMyName);
