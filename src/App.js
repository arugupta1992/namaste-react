// // const element = React.createElement(
// //     'h1', 
// //     {id: "heading"}, 
// //     "Hellow World"
// // );
// // console.log(element);
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(element);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div", {id:"parent"}, [
// 	React.createElement("div", {id:"child"},
// 		[ React.createElement("h1", {id:"heading"}, "I am a h1 tag"),
// 		  React.createElement("h1", {id:"headong2"}, "I am h2 tag")
// 		]),
	
// 	React.createElement("div", {id:"child2"},
// 		[ React.createElement("h1", {id:"heading3"}, "I am a h1 tag"),
// 		  React.createElement("h1", {id:"headong3"}, "I am h2 tag")
// 		])
//     ]);

//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(parent);

import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';


const AppLayout = () => {
	return (
		<div className="appcontainer">
			{<HeaderComponent />}
			{<BodyComponent />}
		</div>
	);
}

const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			errorElement: <Error />,
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/contact",
			element: <Contact />,
		}
	]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);