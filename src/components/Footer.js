import { Component } from "react";


export class Footer extends Component {
    render = () => {
        return (
            <div >
                <div className="container-fluid" style={{backgroundColor:"#1B9EB2"}} >
                    <div className="row">
                        <div className="col-lg-5 col-md-4 col-12 p-5"  style={{WebkitTextFillColor:"#ffffff"}} >
                            <div><h3>VISIT PHILIPPINES:</h3></div>
                            <div className="p-3 ">
                                <p>Embassies in GCC</p>
                                <p>info@ddpl.com</p>
                                <p>marketing@ddpl.com</p>
                                <p>www.philippines.com</p>
                                <p>Contact Us</p>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-8 col-12">
                            <div className="row">
                                <div className="col-md-4 col-12 pt-5" style={{Color:"#ffffff"}}>
                                    <div><h3>More Info</h3></div>
                                    <div className="p-3">
                                        <p>Hotels</p>
                                        <p>Travel Agents</p>
                                        <p>Gastronomy</p>
                                        <p>Events</p>
                                        <p>Statistics</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12" style={{Color:"#ffffff"}}>
                                    <div><h2>    </h2></div>
                                    <div className="p-5"><br></br><br></br><br></br>
                                        <p>Press Center</p>
                                        <p>Regenerative Tourism</p>
                                        <p>Medical Tourism</p>
                                        <p>Investments</p>
                                        <p>Retirement</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 pt-5" style={{Color:"#ffffff"}}>
                                    <div><h3>Social</h3></div>
                                    <div className="p-3">
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
                    <hr />
                    <div>;

                    </div>
                </div>
            </div>


        )
    }
}