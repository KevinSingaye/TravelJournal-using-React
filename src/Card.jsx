import React from "react"
import monfuji from "./assets/mont-fuji.jpeg"
import pin from "./assets/location-dot-solid.svg"
function Card() {

    return (
<>

<div className="CardContainer">

<div className="Card">

<img src={monfuji} className="CardImg" alt="montFuji" />

<div className="ContainerTexte">
<div className="ContainerLocation">
<p className="CardLocation"> <img src={pin} className="pin" alt="pin icon"  />  J A P A N </p> <p className="GoogleMaps"> View on Google Maps</p></div>
<p className="CardTitle"> Mont Fuji</p>
<p className="CardDate">12 Jan, 2021 - 24 Jan, 2021</p>

<p>  Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters <br /> 
 (12,380 feet). Mount Fuji is the single most popular tourist <br /> 
  site in Japan, for both Japanese and foreign tourists.
    
</p>

</div>

</div>
</div>
</>
    )
}

export default Card