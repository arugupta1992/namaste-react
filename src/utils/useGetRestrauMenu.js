import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useGetRestrauMenu = (resId) => {
    const [menuPageData, setMenuPageData] = useState(null);

    useEffect( ()=> {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const response = await fetch(MENU_URL + resId);
        
        if(!response.ok) {
            throw new Error(`Fetch failed: ${response.status}`);
        }
        const jsonData = await response.json();
        setMenuPageData(jsonData.data.cards);

    }

    return menuPageData;
}

export default useGetRestrauMenu;