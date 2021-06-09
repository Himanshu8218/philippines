import { Component } from "react";
import { Nav, Navbar, Icon } from "rsuite";

export class FooterComponent extends Component {
    render = () => {
        return (
            <div style={{ backgroundColor: "#1B9EB2" }} >
                <div className="container">
                    <div className="row pt-4 pb-5 justify-content-between">
                        <div className="col-md-auto col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }} >
                            <div><h4>Visit Philippines</h4></div>
                            <div className="mt-4" style={{ WebkitTextFillColor: "#ffffff" }}>
                                <div className="mt-4 mb-2">Embassies in GCC</div>
                                <div className="mt-4 mb-2">info@ddpl.com</div>
                                <div className="mt-4 mb-2">marketing@ddpl.com</div>
                                <div className="mt-4 mb-2">www.philippines.com</div>
                                <div className="mt-4 mb-2">Contact Us</div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                            <div className="row justify-content-around">
                                <div className="col-md-auto col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }}>
                                    <div><h4>More Info</h4></div>
                                    <div className="mt-4" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        <div className="mt-4 mb-2">Hotels</div>
                                        <div className="mt-4 mb-2">Travel Agents</div>
                                        <div className="mt-4 mb-2">Gastronomy</div>
                                        <div className="mt-4 mb-2">Events</div>
                                        <div className="mt-4 mb-2">Statistics</div>
                                    </div>
                                </div>
                                <div className="col-md-auto col-12 pt-md-4">
                                    <div className="mt-4 pt-md-2" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        <div className="mt-4 mb-1">Press Center</div>
                                        <div className="mt-4 mb-1">Regenerative Tourism</div>
                                        <div className="mt-4 mb-1">Medical Tourism</div>
                                        <div className="mt-4 mb-1">Investments</div>
                                        <div className="mt-4 mb-1">Retirement</div>
                                    </div>
                                </div>
                                <div className="col-md-auto col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }}>
                                    <div><h4>Social</h4></div>
                                    <div className="mt-4" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        <div className="mt-4 mb-2">Instagram</div>
                                        <div className="mt-4 mb-2">Youtube</div>
                                        <div className="mt-4 mb-2">Facebook</div>
                                        <div className="mt-4 mb-2">Twitter</div>
                                        <div className="mt-4 mb-2">Blogs</div>
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