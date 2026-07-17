import { Link } from "react-router";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";

const HeaderComponent = () => {
    const isOnline = useGetOnlineStatus();

	return (
		<div className="header">
			<img src="../assets/logo.jpg" alt="logo" className="logo" />
			<div className="nav-items">
				<ul>
					<li>
						<span>Online Status: {isOnline ? "🟢" : "🔴"}</span>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HeaderComponent;