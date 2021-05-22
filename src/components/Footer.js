import { Component } from "react";
import { Nav, Navbar, Icon } from "rsuite";

export class Footer extends Component {
    render = () => {
        return (
            <div style={{ backgroundColor: "#1B9EB2" }} >
                <div className="container">
                    <div className="row pb-3 pt-3">
                        <div className="col-lg-5 col-md-4 col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }} >
                            <div><h4>VISIT PHILIPPINES</h4></div>
                            <div className="mt-2" style={{ WebkitTextFillColor: "#A7D1E1" }}>
                                <p>Embassies in GCC</p>
                                <p>info@ddpl.com</p>
                                <p>marketing@ddpl.com</p>
                                <p>www.philippines.com</p>
                                <p>Contact Us</p>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-8 col-12">
                            <div className="row">
                                <div className="col-md-4 col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }}>
                                    <div><h3>More Info</h3></div>
                                    <div className="mt-2" style={{ WebkitTextFillColor: "#A7D1E1" }}>
                                        <p>Hotels</p>
                                        <p>Travel Agents</p>
                                        <p>Gastronomy</p>
                                        <p>Events</p>
                                        <p>Statistics</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 pt-md-5">
                                    <div className="mt-2 pt-md-2" style={{ WebkitTextFillColor: "#A7D1E1" }}>
                                        <p>Press Center</p>
                                        <p>Regenerative Tourism</p>
                                        <p>Medical Tourism</p>
                                        <p>Investments</p>
                                        <p>Retirement</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 pt-3" style={{ WebkitTextFillColor: "#ffffff" }}>
                                    <div><h3>Social</h3></div>
                                    <div className="mt-2" style={{ WebkitTextFillColor: "#A7D1E1" }}>
                                        <p>Instagram</p>
                                        <p>Youtube</p>
                                        <p>Facebook</p>
                                        <p>Twitter</p>
                                        <p>Blogs</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white mt-2" style={{ paddingTop: "1px" }}></div>
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
                        <div className="col-md-auto col-12 mt-2"><Icon icon="universal-access" /> All rights reserved</div>
                    </div>
                </div>
            </div>
        )
    }
}