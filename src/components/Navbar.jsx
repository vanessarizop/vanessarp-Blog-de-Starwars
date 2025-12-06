import { Link } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const [showDropdown, setShowDropdown] = useState(false);
	
	const removeFavorite = (fav) => {
		dispatch({ type: "remove_favorite", payload: fav });
	};

	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/">
					<img src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png" id="logo" />
				</Link>
			
	<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" onClick={() => setShowDropdown(!showDropdown)}>
						Favorites ({store.favorites.length})
					</button>
					{showDropdown && (
	<ul className="dropdown-menu show">
							{store.favorites.length === 0 ? (
								<li><span className="dropdown-item">No favorites </span></li>) : (store.favorites.map((fav) => (
									<li key={fav.uid}>
										<div className="dropdown-item d-flex justify-content-between align-items-center">
											<span>{fav.name}</span>
											<button className="btn btn-sm  ms-2" onClick={() => removeFavorite(fav)}>
												<i className="fa-solid fa-trash"></i>
											</button>
										</div>
									</li>
								))
							)}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};