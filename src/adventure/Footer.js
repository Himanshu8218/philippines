import { Component } from "react";
import { Nav, Navbar, Icon } from "rsuite";

export class FooterComponent extends Component {
    render = () => {
        return (
            <div style={{ backgroundColor: "#1B9EB2" }} >
                <div className="container">
                    <div className="row pt-4 pb-5 justify-content-between">
                        <div className="col-md-auto col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }} >
                            <div><h4>Below Sea Level</h4></div>
                            <div className="mt-4" style={{ WebkitTextFillColor: "#ffffff" }}>
                                <div className="mt-4 mb-2">Underwater Scuba Diving</div>
                                <div className="mt-4 mb-2">Snorkelling </div>
                                <div className="mt-4 mb-2">Underwater photography</div>
                                <div className="mt-4 mb-2">Underwater Sea Walk</div>
                                <div className="mt-4 mb-2">Freediving</div>
                                <div className="mt-4 mb-2">Glass-bottom boat tours</div>
                                <div className="mt-4 mb-2">Submarine Tours</div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                            <div className="row justify-content-around">
                                <div className="col-md-auto col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }}>
                                    <div><h4>At Sea Level</h4></div>
                                    <div className="mt-4" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        <div className="mt-4 mb-2">Whitewater rafting</div>
                                        <div className="mt-4 mb-2">Cruising</div>
                                        <div className="mt-4 mb-2">Kayaking</div>
                                        <div className="mt-4 mb-2">Paddle boarding</div>
                                        <div className="mt-4 mb-2">Camp on a island</div>
                                    </div>
                                </div>
                                <div className="col-md-auto col-12 pt-md-4">
                                    <div className="mt-4 pt-md-2" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        <div className="mt-4 mb-1">Surfing</div>
                                        <div className="mt-4 mb-1">Waterskiing</div>
                                        <div className="mt-4 mb-1">Medical Tourism</div>
                                        <div className="mt-4 mb-1">Sailing</div>
                                        <div className="mt-4 mb-1">Jet-skiing</div>
                                    </div>
                                </div>
                                <div className="col-md-auto col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }}>
                                    <div><h4>Above Sea Level</h4></div>
                                    <div className="mt-4" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        <div className="mt-4 mb-2">Hiking</div>
                                        <div className="mt-4 mb-2">Ultralight Flying </div>
                                        <div className="mt-4 mb-2">Paragliding</div>
                                        <div className="mt-4 mb-2">Trekking</div>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-2" style={{ paddingTop: "1px", backgroundColor: '#A7D1E1' }}></div>
                <div className="container" style={{ WebkitTextFillColor: "#A7D1E1" }}>
                    <div className="row pt-2 pb-4 justify-content-between" style={{ backgroundColor: "#1B9EB2" }}>
                        <div className="col-md-auto col-12 mt-2">
                            <div className="row">
                                <div className="col-md-auto col-12 mt-2">Home</div>
                                <div className="col-md-auto col-12 mt-2">Privacy Policy</div>
                                <div className="col-md-auto col-12 mt-2">Site Map</div>
                                <div className="col-md-auto col-12 mt-2">Terms & Condition</div>
                            </div>
                        </div>
                        <div className="col-md-auto col-12 mt-3"><Icon icon="universal-access" /> All rights reserved</div>
                    </div>
                </div>
            </div>
        )
    }
}