import MenuItemList from './MenuItemList';
import { useState } from 'react';

const RestrauCategory = ({category, showMenuItems, setShowMenuCategoryIndex}) => {
    // const [showMenuItems, setShowMenuItems] = useState(false);

    // const toggleMenuItems = () => {
    //     setShowMenuItems(!showMenuItems);
    // }

    const handleClick = () => {
        setShowMenuCategoryIndex();
    }


    return (
            <div>
                {/* Accordian Header */}
                <div>
                    <div onClick={handleClick}>
                        <h2>{category.card.card.title} {category.card.card.itemCards.length}</h2>
                    </div>               
                    <span>⬇️</span>
                </div>
                {/* Accordian Body */}
                {showMenuItems && <MenuItemList itemCards={category.card.card.itemCards} />}
            </div>
    )
}

export default RestrauCategory;

/* Acting as uncontrolled component where the whether the category is open or closed is managed by the component itself. With ths approach, 
we can open multiple categories at the same time. But we want that only one category should be open at a time. So we will lift the state up to the parent 
component (RestrauMenu) and manage the open category there.*/

// const RestrauCategory = ({category}) => {
//     const [showMenuItems, setShowMenuItems] = useState(false);

//     const toggleMenuItems = () => {
//         setShowMenuItems(!showMenuItems);
//     }
//     return (
//             <div>
//                 {/* Accordian Header */}
//                 <div onClick={toggleMenuItems}>
//                     <div>
//                         <h2>{category.card.card.title} {category.card.card.itemCards.length}</h2>
//                     </div>               
//                     <span>⬇️</span>
//                 </div>
//                 {/* Accordian Body */}
//                 {showMenuItems && <MenuItemList itemCards={category.card.card.itemCards} />}
//             </div>
//     )
// }



/*
Current Implementation: Toggles the individual category menu items on click of the category header. 
Now I want that if I click on one category header, it should open that category and close all other categories.
So that only one category is open at a time.
Also on clicking the same category again it should close that category.

To achieve this, we can lift the state up to the parent component (RestrauMenu) and manage the open category there. 
We will pass down the currently open category and a function to set it to each RestrauCategory component.

Because data in React flows downwards (one-way data binding), sibling components cannot talk directly to each other. 
Lifting the state creates a single source of truth, keeping your UI perfectly in sync.

Note: Use the 'react-developer-tools' extension in the browser to see the component tree and state changes in real-time.

CONTROLLED AND UNCONTROLLED COMPONENTS:
Controlled components are those where form data is handled by the React component's state. 
In a controlled component, the value of the input element is controlled by React. 
The state of the input is updated via an onChange event handler, and the value of the input is set to the state variable.

Over here, 
*/