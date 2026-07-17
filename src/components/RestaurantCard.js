import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
	const {
        name,
		cloudinaryImageId,
        avgRating,
        cuisines,
        costForTwo,
		sla,
    } = props.resData;
	return (
			<div className="card">
				<div className="image-container">
					<img 
						className="restrau-image"
						alt={name + " image"}
						src={CDN_URL + cloudinaryImageId} 
					/>
				</div>
				<div className="card-footer">
					<div className="restrau-name">{name}</div>
					<div className="card-row2">
						<div className="restrau-rating">{avgRating} stars</div>
						<div className="delivery-time">{sla.deliveryTime}</div>
					</div>
					<div className="restrau-cuisine">{cuisines.join(", ")}</div>
				</div>
			</div>
	)
}

export const withOfferRestaurantCard = (RestaurantCard) => {
	return (props) => {
		const discount = props.resData.aggregatedDiscountInfoV3?.header + " " + props.resData.aggregatedDiscountInfoV3?.subHeader;
		return (
			<div className="container">
				<label>{discount}</label>
				<RestaurantCard {...props} />
			</div>
		)
	}
}
export default RestaurantCard;