import React from "react"
import monfuji from "./assets/mont-fuji.jpeg"
import pin from "./assets/location-dot-solid.svg"
function Card(props) {
    return (
<>
<div className="CardContainer">
<div className="Card">
<img src={`src/assets/${props.imageUrl}`} className="CardImg" alt="montFuji" />

<div className="ContainerTexte">
<div className="ContainerLocation">
<p className="CardLocation"> <img src={pin} className="pin" alt="pin icon"  /> {props.location}</p> <p className="GoogleMaps"><a href={props.googleMapsUrl}> View on Google Maps </a></p></div>
<p className="CardTitle"> {props.title}</p>
<p className="CardDate"> {props.startDate} - {props.endDate}</p>

<p>  {props.description} <br/>
{props.description2} <br/>
{props.description3}<br/>
{props.description4}<br/>
{props.description5}

    
</p>

</div>

</div>
</div>
</>
    )
}

export default Card