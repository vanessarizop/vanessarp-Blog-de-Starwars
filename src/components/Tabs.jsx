import { Link } from "react-router-dom";


export const Tabs=()=>{
    return(
<ul className="nav nav-tabs text-light m-0 ">
  <li className="nav-item text-light ">
<Link to="/">
					<img src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png" id="logo1" /> 
				</Link>
  </li>
  <li className="nav-item">
<Link className="nav-link " to="/people/"><i class="fa-solid fa-user"></i>
  Characters
</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to= "/planets/"><i className="fa-solid fa-earth-americas"></i> Planets</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="/vehicles/"><i className="fa-solid fa-shuttle-space"></i> Vehicles</Link>
    </li>
</ul>
    )
};

