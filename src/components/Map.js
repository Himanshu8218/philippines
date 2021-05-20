import { Component } from "react";
import { Icon } from "rsuite";

const features = [
    { icon: "file-code-o", title: "Adventure" },
    { icon: "Island Life", title: "Island Life" },
    { icon: "Attractions", title: " Attractions" },
    { icon: " Festivals", title: " Festivals" },
    { icon: "Shopping", title: "Shopping" },
    { icon: " Entertainment ", title: " Entertainment " },
    { icon: "Travel Partners", title: "Travel Partners" },
    { icon: "Video & Pics", title: "Video & Pics" },
    { icon: "Information", title: "Information" },
    { icon: "Health", title: "Health" },
    { icon: "Transportation", title: "Transportation" },
    { icon: "cog", title: "title" }
]

export class Map extends Component {

    renderFeatureIcons = () => {
        return features.map((feature, index) => {
            return (
                <div className="mb-3 mt-3 col-md-3 col-4 text-center">
                    <div style={{ width: "100px" }}>
                        <div className="p-2" style={{ backgroundColor: "#848383", borderRadius: "50%", height: "100px" }}>
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
                        <div className="col-lg-7 col-md-9 col-12">
                            <h1> EXPLORE THE FUN </h1>
                            <p> A country that is blessed by nature, the Philippines has a lot to offer.
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