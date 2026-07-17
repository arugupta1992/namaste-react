import RestaurantCard, { withOfferRestaurantCard } from "./RestaurantCard";
import resList from '../utils/mockData';
import { useState , useEffect } from 'react';
import { Link } from 'react-router';
import useGetOnlineStatus from "../utils/useGetOnlineStatus";
import { RESTRAU_LIST_URL } from "../utils/constants";

const BodyComponent = () => {
    const [restrauList, setRestrauList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestrauList, setFilteredRestrauList] = useState([]);

    const OfferCard = withOfferRestaurantCard(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, [])

    // async function fetchData() {

    // } OR

    const fetchData = async () => {
        // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5748092&lng=77.35658099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await fetch(RESTRAU_LIST_URL);
        // const url = "https://namastedev.com/api/v1/listRestaurants";
        // const response = await fetch(url);
        const json = await response.json();
        setRestrauList(json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestrauList(json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setRestrauList(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestrauList(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const isOnline = useGetOnlineStatus();
    if(!isOnline) return <h1>🔴 Offline, Please check your internet connection!!</h1>

	return (
		<div id="body">
			<div id="body-header">
                <div className="search-conatiner">
                    <input className="search-input" type="text" placeholder="Search for restaurants" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);                       
                        }}
                    />
                    <button className="search-btn" 
                        onClick = {() => {
                            let filtered = restrauList.filter((restrau) =>{
                                return restrau.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            setFilteredRestrauList(filtered);
                        }}> Search
                    </button>
                </div>
                
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        console.log(restrauList);
                        const filtered = restrauList.filter((restrau) => restrau.info.avgRating > 4.4);
                        setFilteredRestrauList(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
			<div id="card-container">
                {filteredRestrauList.map((restrau) => {
                    
                    const hasOffer = !!restrau.info.aggregatedDiscountInfoV3?.header;
                    return (
                        <Link to={'/restrauMenu/' + restrau.info.id} key={restrau.info.id}>
                            {hasOffer ? (
                                <OfferCard key={restrau.info.id} resData={restrau.info} />
                            ) : (
                                <RestaurantCard key={restrau.info.id} resData={restrau.info} />
                            )}
                        </Link>
                    )
                })}
        
			</div>
		</div>
	)
}

export default BodyComponent;