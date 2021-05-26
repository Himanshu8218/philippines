import { Component } from "react";
import { ReactComponent as AdventureIcon } from './icons/Adventure.svg'
import { ReactComponent as BeachesIcon } from './icons/Beaches.svg'
import { ReactComponent as AttractionsIcon } from './icons/Attractions.svg'
import { ReactComponent as CultureIcon } from './icons/Culture.svg'
import { ReactComponent as ShoppingIcon } from './icons/Shopping.svg'
import { ReactComponent as EntertainmentIcon } from './icons/Entertainment.svg'
import { ReactComponent as TravelAgentIcon } from './icons/travel-agents.svg'
import { ReactComponent as PicturesIcon } from './icons/Pictures.svg'
import { ReactComponent as InfoIcon } from './icons/Info.svg'
import { ReactComponent as TravelAdvisoryIcon } from './icons/travel-advisory.svg'
import { ReactComponent as TransportationIcon } from './icons/Transportation.svg'
import { ReactComponent as ItineraryIcon } from './icons/Itinerary.svg'

const features = [
    AdventureIcon,    BeachesIcon,
    AttractionsIcon,
    CultureIcon,  
    ShoppingIcon,
    EntertainmentIcon,
    TravelAgentIcon,
    PicturesIcon,
    InfoIcon,
    TravelAdvisoryIcon,
    TransportationIcon,
    ItineraryIcon]

export class Map extends Component {

    renderFeatureIcons = () => {
        return features.map((FeatureIcon, index) => {
            return (
                <div className="mb-3 mt-3 col-4 col-md-3" key={index}>
                    <div style={{width: "100%" }}>
                        <FeatureIcon  className="mt-2 feature-icon-item" />
                    </div>
                </div>
            )
        })
    }

    render = () => {
        return (
            <div  style={{ position: "relative"  }}>
                <div className="container mb-5">
                    <div className="row justify-content-evenly align-items-center" >
                        <div className="col-md-7 col-12 ">
                            <div className="pt-5 pb-5 " style={{ marginLeft: "3.5rem"}}>
                                <h1 className="" style={{ color: "#1B9EB2" }}> EXPLORE THE FUN </h1>
                                <p className="mt-2" style={{ color: "#1B9EB2" }}> A country that is blessed by nature, the Philippines has a lot to offer.
                Explore the why, how and when of visiting the most exciting spot on this side of the planet.</p>
                            </div>
                            <div className="row no-gutters " style={{'--bs-gutter-x': '-7rem', marginRight: "3rem"}}>
                                {this.renderFeatureIcons()}
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="mt-5 p-md-1 p-lg-3 p-xl-5">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/Map.svg`}></img>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}