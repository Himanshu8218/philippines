import { Component } from "react";
import { Icon } from "rsuite";

const features = [
    { icon: "odnoklassniki", title: "Adventure" },
    { icon: "ship", title: "Island Life" },
    { icon: "fort-awesome", title: " Attractions" },
    { icon: "gift", title: " Festivals" },
    { icon: "shopping-bag", title: "Shopping" },
    { icon: "glass", title: " Entertainment " },
    { icon: "handshake-o", title: "Travel Partners" },
    { icon: "camera", title: "Video & Pics" },
    { icon: "info", title: "Information" },
    { icon: "heartbeat", title: "Health" },
    { icon: "plane", title: "Transportation" },
    { icon: "cog", title: "Halaal Itineraries" }
]

export class Map extends Component {

    renderFeatureIcons = () => {
        return features.map((feature, index) => {
            return (
                <div className="mb-3 mt-3 col-md-3 col-4 text-center">
                    <div style={{ width: "100px" }}>
                        <div className="p-2" style={{ backgroundColor: "#1B9EB2", borderRadius: "50%", height: "100px", }}>
                            <Icon icon={feature.icon} size="4x" style={{ marginTop: "15px", color: "#ffffff" }} />
                        </div>
                        <div className="mt-2 text-black">{feature.title}</div>
                    </div>
                </div>
            )
        })
    }

    render = () => {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-9 col-12 p-5">
                            <h1 className="" style={{WebkitTextFillColor:"#1B9EB2"}}> EXPLORE THE FUN </h1>
                            <p className="" style={{WebkitTextFillColor:"#1B9EB2"}}> A country that is blessed by nature, the Philippines has a lot to offer.
                Explore the why, how and when of visiting the most exciting spot on this side of the planet.</p>
                        </div>
                    </div>

                    <div className="row" >
                        <div className="col-md-7 col-12">
                            <div className="row mt-4 mb-4">
                                {this.renderFeatureIcons()}
                            </div>
                        </div>
                        <div className="col-md-5 col-12">

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}