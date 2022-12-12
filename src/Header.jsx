import React from "react"
import WorldTravel from './assets/earth-americas-solid.svg'

function Header() {
    return (
        
<div className="header">
    
<img src={WorldTravel} className="logo" alt="TravelJournalLogo" />
<p>My travel journal.</p>
</div>


    )
}

export default Header