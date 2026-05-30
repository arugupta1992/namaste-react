// const element = React.createElement(
//     'h1', 
//     {id: "heading"}, 
//     "Hellow World"
// );
// console.log(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

const parent = React.createElement("div", {id:"parent"}, [
	React.createElement("div", {id:"child"},
		[ React.createElement("h1", {id:"heading"}, "I am a h1 tag"),
		  React.createElement("h1", {id:"headong2"}, "I am h2 tag")
		]),
	
	React.createElement("div", {id:"child2"},
		[ React.createElement("h1", {id:"heading3"}, "I am a h1 tag"),
		  React.createElement("h1", {id:"headong3"}, "I am h2 tag")
		])
    ]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);