import { Component } from "react";

import { ReactComponent as AdventureIcon } from './icons/diving-googles.svg'
import { ReactComponent as BeachesIcon } from './icons/Beach.svg'
import { ReactComponent as AttractionsIcon } from './icons/building.svg'
import { ReactComponent as CultureIcon } from './icons/carnival-mask.svg'
import { ReactComponent as ShoppingIcon } from './icons/Bag.svg'
import { ReactComponent as EntertainmentIcon } from './icons/Wine-glass.svg'
import { ReactComponent as TravelAgentIcon } from './icons/hand-shake.svg'
import { ReactComponent as PicturesIcon } from './icons/camera.svg'
import { ReactComponent as InfoIcon } from './icons/Info.svg'
import { ReactComponent as TravelAdvisoryIcon } from './icons/facemask.svg'
import { ReactComponent as TransportationIcon } from './icons/Flight.svg'
import { ReactComponent as ItineraryIcon } from './icons/Halaal.svg'

const featureIcons = [
    AdventureIcon,
    BeachesIcon,
    AttractionsIcon,
    CultureIcon,
    ShoppingIcon,
    EntertainmentIcon,
    TravelAgentIcon,
    PicturesIcon,
    InfoIcon,
    TravelAdvisoryIcon,
    TransportationIcon,
    ItineraryIcon
]

const featureTitles = [
    "Adventure",
    "Island Life",
    "Attractions",
    "Festivals",
    "Shopping",
    "Entertainment",
    "Travel Partners",
    "Videos & Pics",
    "Information",
    "Health",
    "Transportation",
    "Halaal Itineraries"
]


export class MapComponent extends Component {

    renderFeatureIcons = () => {
        return featureIcons.map((FeatureIcon, index) => {
            return (
                <div className="mb-3 mt-3 col-4 col-md-3" key={index}>
                    <div style={{ width: "100px" }} onClick={()=>{
                        this.props.history.push("/adventure")
                    }}>
                        <div className="align-items-center justify-content-center feature-icon-item" style={{ height: "100px", display: "flex", backgroundColor: "#1B9EB2", borderRadius: "50%" }}>
                            <FeatureIcon className="feature-icon-item-image" style={{color: "#FFD045"}} />
                        </div>
                        <div className="mt-3 text-center">
                            <p>{featureTitles[index]}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render = () => {
        return (
            <div style={{ position: "relative" }}>
                <div className="container mb-5">
                    <div className="row justify-content-evenly align-items-center" >
                        <div className="col-md-7 col-12 ">
                            <div className="pt-5 pb-5">
                                <h1 className="" style={{ color: "#1B9EB2" }}> EXPLORE THE FUN </h1>
                                <p className="mt-2" style={{ color: "#1B9EB2" }}> A country that is blessed by nature, the Philippines has a lot to offer.
                Explore the why, how and when of visiting the most exciting spot on this side of the planet.</p>
                            </div>
                            <div className="row no-gutters">
                                {this.renderFeatureIcons()}
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="mt-5 p-md-1 p-lg-3 p-xl-5">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/Map.svg`} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}