import React from "react"
import {Link} from "react-router-dom"
import './Navbar.css'
function NavBar(){
    return(
        <nav>
            <ul>
                {/* <li><Link to="/">MainPage</Link></li> */}
                <li><Link to="/RouteFinder">RouteFinder</Link></li>
            </ul>
        </nav>

    );
}
export default NavBar;