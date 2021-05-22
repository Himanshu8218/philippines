import { Component } from "react";
import { Icon } from "rsuite";

const features = [
    { url: `${process.env.PUBLIC_URL}/images/icons/Adventure.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Beaches.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Attractions.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Culture.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Shopping.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Entertainment.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Travel Agents.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Pictures.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Info.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Travel Advisory.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Transportation.svg` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Itinerary.svg` }
]

export class Map extends Component {

    renderFeatureIcons = () => {
        return features.map((feature, index) => {
            return (
                <div className="mb-3 mt-3 col-4 col-md-3">
                    <div style={{width: "100%" }}>
                        <img src={feature.url} className="mt-2 feature-icon-item" />
                    </div>
                </div>
            )
        })
    }

    render = () => {
        return (
            <div>
                <div className="container mb-5">
                    <div className="row justify-content-evenly align-items-center" >
                        <div className="col-md-7 col-12">
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
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/map4.svg`}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}