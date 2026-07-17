import MenuItemList from './MenuItemList';
import { useState } from 'react';

const RestrauCategory = ({category}) => {
    const [showMenuItems, setShowMenuItems] = useState(false);

    const toggleMenuItems = () => {
        setShowMenuItems(!showMenuItems);
    }
    return (
            <div>
                {/* Accordian Header */}
                <div onClick={toggleMenuItems}>
                    <div>
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