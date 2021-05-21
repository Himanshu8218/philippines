import { Component } from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar, Icon } from "rsuite";

export class NavbarComponent extends Component {
    render = () => {
        return (
            <div>
                <Navbar style={{ background: "transparent", position: "absolute", width: "100%" }}>
                    <div className="container">
                        <Navbar.Body>
                            <Nav className="text-white">
                                <Nav.Item eventKey="1"><Icon icon="bars" className="text-white" /></Nav.Item>
                                <Nav.Item eventKey="2"><span className="text-white">EN | AR</span></Nav.Item>
                                <Nav.Item eventKey="3"><Icon icon="search" className="text-white" /></Nav.Item>
                            </Nav>
                            <Nav pullRight>
                                <Nav.Item ><img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="img-fluid" style={{ width: "90px" }} /></Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </div>
                </Navbar>
            </div>
        )
    }
}
