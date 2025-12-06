import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import starImageUrl from "../assets/img/starwars.jpg";
import "../index.css";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer();

	return (
		
		<div className="container-fluid p-0 bg-dark  lettersstar ">
			
				<img src={starImageUrl} className="background-imagen img-fluid w-100"/>
				</div>
			

	);
}; 