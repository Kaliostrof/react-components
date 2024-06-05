export const Year = () => {
	//декларативный подход
	let t = new Date();
	setInterval(() => render(), 180000);

	function render() {
		console.log(t.getFullYear());
		return t.getFullYear();
	}
	return <div>{render()}</div>;
};
