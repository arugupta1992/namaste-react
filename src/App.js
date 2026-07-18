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
import { useState, useEffect } from 'react';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

// Below is the code to change the value of the userContext and pass it down to the child components. 
// We will wrap the AppLayout component with the UserContext.Provider and pass the value prop to it.
// This way, all the child components of AppLayout will have access to the loggedInUser value from the context.


const AppLayout = () => {
	const [loggedInUser, setLoggedInUser] = useState("Dummy User");

	//Suppose  ihave an auth api that fetches the logged in user name
	useEffect(() => {
			//I am currently returning hard coded value since I don't have the api
			const userName = { name: "Arushi Gupta" };
			setLoggedInUser(userName.name);
	},[])

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
				<div className="appcontainer">
					<UserContext.Provider value={{loggedInUser: loggedInUser}}>      { /* This means only the user context used in Header component will have value Elon Musk and rest of the places in the app will */}
						{<HeaderComponent />}										{/* have the value "Arushi Gupta" as set in the parent UserContext.Provider. This is because the child component will always use the nearest context provider value. */}
					</UserContext.Provider>
					{<Outlet />}
				</div>
			</UserContext.Provider>
		</Provider>
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