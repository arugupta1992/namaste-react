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
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauMenu from './components/RestrauMenu';


const AppLayout = () => {
	return (
		<div className="appcontainer">
			{<HeaderComponent />}
			{<Outlet />}
		</div>
	);
}

//BrowserROuter with nested child routes. With this the header remains constant and only the body changes when we navigate to different routes.
const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: '/',
					element: <BodyComponent />
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/restrauMenu/:resId",
					element: <RestrauMenu />,
				}
			],
			errorElement: <Error />,
		},
		
	]);

//To create a router object that refreshes the page when we navigatet to the defined path

// const appRouter = createBrowserRouter([
// 		{
// 			path: "/",
// 			element: <AppLayout />,
// 			errorElement: <Error />,
// 		},
// 		{
// 			path: "/about",
// 			element: <About />,
// 		},
// 		{
// 			path: "/contact",
// 			element: <Contact />,
// 		}
// 	]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);