import { Component } from "react";
import { Carousel } from './carousel';

const carouselImages = [
    { url: `${process.env.PUBLIC_URL}/images/PinkSandBeach1.jpg`, name: "Pink Sand" },
    { url: `${process.env.PUBLIC_URL}/images/BlackSandBeach3.jpg`, name: "Black Sand" },
    { url: `${process.env.PUBLIC_URL}/images/GoldSandBeach.jpg`, name: "Gold Sand" },
    { url: `${process.env.PUBLIC_URL}/images/WhiteSandBeach3.jpg`, name: "White Sand" },
    { url: `${process.env.PUBLIC_URL}/images/BrownSandBeach2.jpg`, name: "Brown Sand" },
]

export class HeaderComponent extends Component {
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
                        <div className='parent' style={{
                            width: '100%',
                            height: '85vh',
                            overflow: 'hidden',
                            position: "relative"
                        }}>
                            < video id="video" src={`${process.env.PUBLIC_URL}/images/logo-v.mp4`} autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                            muted></video>
                            <div className='unmute' onClick={this.mute}>
                                {this.state.muted === true ? 
                                <div className='p-3' style={{ backgroundColor: 'white', borderRadius: '16px'}}>
                                    <h6> Press to unmute </h6>
                                     </div> : null}
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
                <div style={{ position: "absolute", top: "55%", bottom: "50%", width: "100%" }}>
                    <div className="row justify-content-center" style={{ margin: "auto", color: "#1B9EB2", ' --bs-gutter-x': '6.5rem' }}>
                        <div className="col-auto" style={{ paddingLeft: 0 }}>
                            <div className="bg-white text-center p-4  header-heading" style={{ borderRadius: "10px", boxShadow: "#44444422 5px 5px", fontWeight: 'bold' }} >WHERE NATURE HAS FUN WITH COLOURS</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}