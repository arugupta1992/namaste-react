import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MENU_URL } from '../utils/constants';
import useGetRestrauMenu from '../utils/useGetRestrauMenu';

const RestrauMenu = () => {
    const { resId }  = useParams();
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

    let { name, cuisines, costForTwoMessage } = menuPageData ? menuPageData[2].card.card.info : { name: "", cuisines: [], costForTwoMessage: "", menu: [] };
    let itemCards = menuPageData ? menuPageData[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards : [];

    return (
        <div>
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <ul>
                {itemCards.map((item)=> {
                    return <li key={item.card.info.id}>{item.card.info.name}</li>;
                })}
            </ul>
        </div>
    )
}

export default RestrauMenu;