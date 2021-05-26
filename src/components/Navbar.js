import { Component } from "react";
import { Nav, Navbar, Icon } from "rsuite";

export default class NavbarComponent extends Component {
    render = () => {
        return (
            <div style={{ background: "transparent", position: "absolute", width: "100%" }}>
                <div style={{ background: "transparent" }}>
                    <div className="container pt-3 pb-2">
                        <div className="row justify-content-between align-items-center">
                            <div className=" col-auto text-white">
                                <div className="row">
                                    <div className="col-auto"><Icon icon="bars" className="text-white" /></div>
                                    <div className="col-auto"><span className="text-white">EN | AR</span></div>
                                    <div className="col-auto"><Icon icon="search" className="text-white" /></div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className=""><img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="img-fluid" style={{ width: "90px" }} /></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 " style={{ paddingTop: "1px", backgroundColor: '#A7D1E1' }}></div>
            </div>
        )
    }
}
