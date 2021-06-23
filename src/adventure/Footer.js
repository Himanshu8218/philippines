import { Component } from "react";
import { Nav, Navbar, Icon } from "rsuite";

export class FooterComponent extends Component {
    render = () => {
        return (
            <div style={{ backgroundColor: "#1B9EB2" }} >
                <div className="container">
                    {this.props.currentTab === "above" ? (
                        <div className="row justify-content-around pt-4 pb-4">
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>Above Sea Level</h4></div>
                                <div className="" style={{ marginTop:'4', color: "#ffffff" }}>
                                    <p className="footers mt-4 mb-2">Ultralight Flying  </p>
                                    <div className="footers mt-4 mb-2">Paragliding</div>
                                    <div className="footers mt-4 mb-2">Trekking</div>
                                    <div className="footers mt-4 mb-2">Hiking</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>At Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Cruising</div>
                                    <div className="footers mt-4 mb-2">Kayaking</div>
                                    <div className="footers mt-4 mb-2">Paddle boarding</div>
                                    <div className="footers mt-4 mb-2">Waterskiing</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-md-4">
                                <div className="mt-4 pt-md-2" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-1">Island Camping</div>
                                    <div className="footers mt-4 mb-1">Whitewater Rafting</div>
                                    <div className="footers mt-4 mb-1">Surfing</div>
                                    <div className="footers mt-4 mb-1">Sailing</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>Below Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Underwater photography</div>
                                    <div className="footers mt-4 mb-2">Underwater Sea Walk</div>
                                    <div className="footers mt-4 mb-2">Freediving</div>
                                    <div className="footers mt-4 mb-2">Glass-bottom boat tours</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-md-4">
                                <div className="mt-4 pt-md-2" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Snorkelling  </div>
                                    <div className="footers mt-4 mb-2">Whale Sharks Tours</div>
                                    <div className="footers mt-4 mb-2">Scuba Diving</div>
                                    <div className="footers mt-4 mb-2">Submarine Tours</div>

                                </div>
                            </div>
                        </div>

                    ) : this.props.currentTab === "at" ? (
                        <div className="row justify-content-around pt-4 pb-4">
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>Above Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Ultralight Flying  </div>
                                    <div className="footers mt-4 mb-2">Paragliding</div>
                                    <div className="footers mt-4 mb-2">Trekking</div>
                                    <div className="footers mt-4 mb-2">Hiking</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-md-4">
                                <div className="mt-4 pt-md-2" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-1">Parasailing</div>
                                    <div className="footers mt-4 mb-1">Skydiving</div>
                                    <div className="footers mt-4 mb-1">Zipline</div>
                                    <div className="footers mt-4 mb-1">Mountain Climbing</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>At Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Cruising</div>
                                    <div className="footers mt-4 mb-2">Kayaking</div>
                                    <div className="footers mt-4 mb-2">Paddle boarding</div>
                                    <div className="footers mt-4 mb-2">Waterskiing</div>
                                </div>
                            </div>
                            
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>Below Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Underwater photography</div>
                                    <div className="mt-4 mb-2">Underwater Sea Walk</div>
                                    <div className="mt-4 mb-2">Freediving</div>
                                    <div className="mt-4 mb-2">Glass-bottom boat tours</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-md-4">
                                <div className="mt-4 pt-md-2" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Snorkelling  </div>
                                    <div className="footers mt-4 mb-2">Whale Sharks Tours</div>
                                    <div className="footers mt-4 mb-2">Scuba Diving</div>
                                    <div className="footers mt-4 mb-2">Submarine Tours</div>

                                </div>
                            </div>
                        </div>
                    ) : this.props.currentTab === "below" && (
                        <div className="row justify-content-around pt-4 pb-4">
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>Above Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Ultralight Flying  </div>
                                    <div className="footers mt-4 mb-2">Paragliding</div>
                                    <div className="footers mt-4 mb-2">Trekking</div>
                                    <div className="footers mt-4 mb-2">Hiking</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-md-4">
                                <div className="mt-4 pt-md-2" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-1">Parasailing</div>
                                    <div className="footers mt-4 mb-1">Skydiving</div>
                                    <div className="footers mt-4 mb-1">Zip lining</div>
                                    <div className="footers mt-4 mb-1">Mountain Climbing</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>At Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Cruising</div>
                                    <div className="footers mt-4 mb-2">Kayaking</div>
                                    <div className="footers mt-4 mb-2">Paddle boarding</div>
                                    <div className="footers mt-4 mb-2">Waterskiing</div>
                                </div>
                            </div>
                            <div className="col-md-auto col-12 pt-md-4">
                                <div className="mt-4 pt-md-2" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-1">Island Camping</div>
                                    <div className="footers mt-4 mb-1">Whitewater Rafting</div>
                                    <div className="footers mt-4 mb-1">Surfing</div>
                                    <div className="footers mt-4 mb-1">Sailing</div>
                                </div>
                            </div>
                            
                            <div className="col-md-auto col-12 pt-3" style={{ color: "#ffffff" }}>
                                <div><h4>Below Sea Level</h4></div>
                                <div className="mt-4" style={{ color: "#ffffff" }}>
                                    <div className="footers mt-4 mb-2">Underwater photography</div>
                                    <div className="footers mt-4 mb-2">Underwater Sea Walk</div>
                                    <div className="footers mt-4 mb-2">Freediving</div>
                                    <div className="footers mt-4 mb-2">Glass-bottom boat tours</div>
                                </div>
                            </div>
                           
                        </div>
                    )}
                </div>

                <div className=" mt-2" style={{ paddingTop: "1px", backgroundColor: '#A7D1E1' }}></div>
                <div className="container" style={{ color: "#A7D1E1" }}>
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