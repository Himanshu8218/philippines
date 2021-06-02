import { Component } from "react";
import { Carousel } from './carousel/carousel'
import VideoCover from 'react-video-cover';
import NavbarComponent from './Navbar';
import { ControlLabel, Icon, IconButton } from "rsuite";

const carouselImages = [
    { url: `${process.env.PUBLIC_URL}/images/PinkSandBeach1.jpg`, name: "Pink Sand" },
    { url: `${process.env.PUBLIC_URL}/images/BlackSandBeachCopy.jpg`, name: "Black Sand" },
    { url: `${process.env.PUBLIC_URL}/images/GoldSandBeach.jpg`, name: "Gold Sand" },
    { url: `${process.env.PUBLIC_URL}/images/WhiteSandBeach3.jpg`, name: "White Sand" },
    { url: `${process.env.PUBLIC_URL}/images/BrownSandBeach.jpg`, name: "Brown Sand" },
]

export class Header extends Component {
    state = {
        muted: true
    }

    mute = () => {
        if (this.state.muted == true) {
            document.getElementById("video").muted = false;
            this.setState({ muted: false });
        } else {
            document.getElementById("video").muted = true;
            this.setState({
                muted: true
            });
        }
    }

    componentDidMount = () => {

    }

    render = () => {
        return (
            <div style={{ position: "relative" }}>
                <div style={{ position: "relative" }}>
                    <div>
                        <div style={{
                            width: '100%',
                            height: '70vh',
                            overflow: 'hidden',
                            position: "relative"
                        }}>
                            <video id="video" src={`${process.env.PUBLIC_URL}/images/logo-v.mp4`} autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }} muted></video>
                            <div style={{ position: "absolute", bottom: 45, right: 20, cursor:"pointer" }} onClick={this.mute}>
                                {this.state.muted === true? <Icon icon="volume-up" className="text-white" size="2x"></Icon>:<Icon  icon="volume-off" className="text-white" size="2x"></Icon>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Carousel items={carouselImages}>
                            {(image, index) => (
                                <div key={index} style={{
                                    width: '100%',
                                    height: '60vh',
                                    backgroundImage: `url(${image.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: "center"
                                }} >
                                    <div className="p-4" style={{ width: "100%", height: "100%" }}>
                                        <div style={{ borderColor: "#ffffff", position: "relative", borderStyle: "solid", borderWidth: "2px", borderRadius: "10px", width: "100%", height: "100%" }}>
                                            <div className="p-2 text-white" style={{ position: "absolute", bottom: 0, left: "20px" }} >
                                                <p className="h4">{image.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
                <NavbarComponent />
                <div style={{ position: "absolute", top: "50%", bottom: "50%", width: "100%" }}>
                    <div className="row justify-content-center" style={{ margin: "auto", color: "#1B9EB2", ' --bs-gutter-x': '6.5rem' }}>
                        <div className="col-auto" style={{ paddingLeft: 0 }}>
                            <div className="bg-white text-center p-4 header-heading" style={{ borderRadius: "10px", boxShadow: "#44444422 5px 5px", fontWeight: 'bold' }} >WHERE NATURE HAS FUN WITH COLOURS</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}