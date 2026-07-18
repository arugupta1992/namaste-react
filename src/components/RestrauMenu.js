import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MENU_URL } from '../utils/constants';
import useGetRestrauMenu from '../utils/useGetRestrauMenu';
import RestrauCategory from './RestrauCategory';

const RestrauMenu = () => {
    const { resId }  = useParams();
    const [ showMenuCategoryIndex, setShowMenuCategoryIndex ] = useState(0);   // To track which category is currently expanded to show the menu items via index. By default, the first category is expanded.
    //Moved below code to useGetRestrauMenu.js custom hook to make the code cleaner and reusable.
    // const [menuPageData, setMenuPageData] = useState(null);

    // useEffect(()=>{
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const url = MENU_URL + resId;
    //         const response = await fetch(url);

    //         if (!response.ok) {
    //         throw new Error(`Fetch failed: ${response.status}`);
    //         }

    //         const jsonData = await response.json();
    //         setMenuPageData(jsonData.data.cards);
    //     } catch (error) {
    //         console.error("fetchData error", error);
    //     }
    // }

    const menuPageData = useGetRestrauMenu(resId);

    const handleMenuCategoryClick = (index) => {
        index === showMenuCategoryIndex ? setShowMenuCategoryIndex(-1) : setShowMenuCategoryIndex(index);
    }

    let { name, cuisines, costForTwoMessage, avgRating } = menuPageData ? menuPageData[2].card.card.info : { name: "", cuisines: [], costForTwoMessage: "", menu: [] };
    let itemCards = menuPageData ? menuPageData[4].groupedCard.cardGroupMap.REGULAR.cards : [];
    let categories = itemCards.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
    // return (
    //     <div>
    //         <h2>{name}</h2>
    //         <p>{avgRating}</p>
    //         <p>{cuisines.join(", ")}</p>
    //         <p>{costForTwoMessage}</p>
    //         <ul>
    //             {itemCards.map((item)=> {
    //                 return <li key={item.card.info.id}>{item.card.info.name}</li>;
    //             })}
    //         </ul>
    //     </div>
    // )

    // return (
    //     <div>
    //         <h2>{name}</h2>
    //         <p>{avgRating}</p>
    //         <p>{cuisines.join(", ")}</p>
    //         <p>{costForTwoMessage}</p>
    //         <div>
    //             {categories.map((category)=> {
    //                 console.log(category);
    //                 return (
    //                     <div key={category.card.card.title}>
    //                         <h2>{category.card.card.title}</h2>
    //                         { category.card.card.itemCards.map((item) => {
    //                             return (
    //                                 <div key={item.card.info.id}>
    //                                     <div>{item.card.info.name}</div>
    //                                     <div>{item.card.info.price / 100}</div>
    //                                     <p>{item.card.info.description}</p>
    //                                 </div>
    //                             )
    //                         })}
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <h2>{name}</h2>
            <p>{avgRating}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <div>
                {categories.map((category, index)=> <RestrauCategory 
                    key={category.card.card.title}
                    category={category}
                    showMenuItems={index === showMenuCategoryIndex}
                    setShowMenuCategoryIndex={() => handleMenuCategoryClick(index)}
                    />
                )}
            </div>
        </div>
    )
}

export default RestrauMenu;