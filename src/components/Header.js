import { Component } from "react";
import { Carousel } from './carousel/carousel'
import VideoCover from 'react-video-cover';
import NavbarComponent from './Navbar';

const carouselImages = [
    { url: `${process.env.PUBLIC_URL}/images/PinkSandBeach1.jpg`, name: "Pink Sand" },
    { url: `${process.env.PUBLIC_URL}/images/BlackSandBeachCopy.jpg`, name: "Black Sand" },
    { url: `${process.env.PUBLIC_URL}/images/GoldSandBeach.jpg`, name: "Gold Sand" },
    { url: `${process.env.PUBLIC_URL}/images/WhiteSandBeach3.jpg`, name: "White Sand" },
    { url: `${process.env.PUBLIC_URL}/images/BrownSandBeach.jpg`, name: "Brown Sand" },
]

export class Header extends Component {

    render = () => {
        return (
            <div style={{ position: "relative" }}>
                <NavbarComponent />
                <div>
                    <div>
                        <div style={{
                            width: '100%',
                            height: '70vh',
                            overflow: 'hidden',
                        }}>
                            <VideoCover videoOptions={{ src: `${process.env.PUBLIC_URL}/images/logo_animation.mp4`, autoPlay: true, muted: false }} />
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
                <div style={{ position: "absolute", top: "50%", bottom: "50%", width: "100%" }}>
                    <div className="row justify-content-center" style={{ margin: "auto", color: "#1B9EB2",' --bs-gutter-x': '6.5rem' }}>
                        <div className="col-auto" style={{ paddingLeft: 0 }}>
                            <div className="bg-white text-center p-4 header-heading" style={{borderRadius: "10px", boxShadow: "#44444422 5px 5px", fontWeight: 'bold' }} >WHERE NATURE HAS FUN WITH COLOURS</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}