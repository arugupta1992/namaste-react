import { CDN_URL } from '../utils/constants';

const MenuItemList = ({itemCards}) => {
    return (
            <div>
                {itemCards.map((item) => {
                    return (
                        <div>
                            <div key={item.card.info.id}>
                                <div>{item.card.info.name}</div>
                                <div>{item.card.info.price / 100}</div>
                                <p>{item.card.info.description}</p>
                            </div>
                            <div>
                                <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name + "image"} />
                                <button>Add</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            
    )
}

export default MenuItemList;