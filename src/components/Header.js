import { Component } from "react";
import { Carousel } from "rsuite";
import VideoCover from 'react-video-cover';

const carouselImages = [
    { url: "/images/BlackSandBeach.jpg", name: "Black ss" },
    { url: "/images/BrownSandBeach.jpg", name: "Black ss" },
    { url: "/images/GoldSandBeach.jpg", name: "Black ss" },
    { url: "/images/PinkSandBeach1.jpg", name: "Black ss" },
    { url: "/images/WhiteSandBeach3.jpg", name: "Black ss" }
]

export class Header extends Component {

    render = () => {
        return (
            <div>
                <div>
                    <div>
                        <div style={{
                            width: '100%',
                            height: '50vh',
                            overflow: 'hidden',
                        }}>
                            <VideoCover videoOptions={{ src: "/images/logo_animation.mp4", autoPlay: true, loop: true }} />
                        </div>
                    </div>
                    <div>
                        <Carousel autoplay className="custom-slider" placement="left" shape={null}>
                            {carouselImages.map((image, index) => (
                                <div key={index} style={{
                                    width: '100%',
                                    height: '50vh',
                                    backgroundImage: `url(${image.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: "center"
                                }} >
                                    <div className="p-4" style={{ width: "100%", height: "100%" }}>
                                        <div style={{ borderColor: "#ffffff", position: "relative", borderStyle: "solid", borderWidth: "2px", borderRadius: "10px", width: "100%", height: "100%" }}>
                                            <div className="p-4 text-white" style={{ position: "absolute", bottom: 0, left: 0 }} >
                                                <p className="h4">{image.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div style={{ position: "absolute", top: "47%", width: "100%" }}>
                    <div className="text-center" style={{margin: "auto"}}>
                        <span className="bg-white p-4" style={{fontSize: "1.2em"}}>WHERE NATURE HAS FUN WITH COLOURS</span>
                    </div>
                </div>
            </div>

        )
    }
}