import { Component } from "react";
import { Icon } from "rsuite";

const features = [
    { url: `${process.env.PUBLIC_URL}/images/icons/Adventure.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Beaches.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Attractions.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Culture.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Shopping.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Entertainment.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Travel Agents.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Pictures.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Info.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Travel Advisory.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Transportation.png` },
    { url: `${process.env.PUBLIC_URL}/images/icons/Itinerary.png` }
]

export class Map extends Component {

    renderFeatureIcons = () => {
        return features.map((feature, index) => {
            return (
                <div className="mb-3 mt-3 col-md-3 col-4 text-center">
                    <div style={{ width: "100px" }}>
                        <img src={feature.url} className="img-fluid mt-2 feature-icon-item" />
                    </div>
                </div>
            )
        })
    }

    render = () => {
        return (
            <div>
                <div className="container mb-5">
                    <div className="row justify-content-between" >
                        <div className="col-md-7 col-12">
                            <div className="pt-5 pb-5">
                                <h1 className="" style={{ color: "#1B9EB2" }}> EXPLORE THE FUN </h1>
                                <p className="" style={{ color: "#1B9EB2" }}> A country that is blessed by nature, the Philippines has a lot to offer.
                Explore the why, how and when of visiting the most exciting spot on this side of the planet.</p>
                            </div>
                            <div className="row mt-4 mb-4">
                                {this.renderFeatureIcons()}
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="mt-5">
                                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/Maps3.svg`}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}