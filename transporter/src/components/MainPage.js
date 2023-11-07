import {React} from 'react'
import { useNavigate } from 'react';
import './RouteFinder.js'
import './MainPage.css'
function MainPage(){
    function routeButton(){
        let navigate = useNavigate(); 
        const routeChange = () =>{ 
        let path = `./components/RouteFinder`; 
        navigate(path);
    }
    
    return(
        <div id='MainPage'>
            
            <h2 id="h2">Transporter</h2>
            <h3 id='h3'>About</h3>
            <p>This webpage is meant to show users without their own transportation the best way to get to where they want to go. The website will leverage public transport systems including trains, planes, and Uber to find the optimal transport based on time and cost. This is a developing site. Eventually the plan is to include more transportation systems (Subway, NJTransit, etc)</p>
            <p><b>Disclaimer: </b>I am not completely sure if I need consent from any of the services I am using but I definitely do not have it so just keep that in mind while using it</p>
            <p><b>Click on the button below to start your search</b></p>
            <br/>
            
                
            <button id="route_finder" onClick={routeButton}>Route Finder</button>
            <br/>
            <br/>
            <br/>
            <img id="uber" width = "300" src = "https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg"/>
            <img id="amtrak" width = "300" src = "https://1000logos.net/wp-content/uploads/2020/09/Amtrak-Logo.png"/>
            <img id="metro" width = "150" src = "https://upload.wikimedia.org/wikipedia/commons/0/0a/WMATA_Metro_Logo_small.svg"/>
            <img id="flightaware" width = "300" src = "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/FlightAware_logo.svg/1200px-FlightAware_logo.svg.png"/>
        </div>
    );
}
}
export default MainPage;