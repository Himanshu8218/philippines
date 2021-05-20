import { Component } from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Icon } from "rsuite";


// list of items
const slideImages = [
    { url: "/images/BlackSandBeach.jpg", name: "Black ss" },
    { url: "/images/BrownSandBeach.jpg", name: "Black ss" },
    { url: "/images/GoldSandBeach.jpg", name: "Black ss" },
    { url: "/images/PinkSandBeach1.jpg", name: "Black ss" },
    { url: "/images/WhiteSandBeach3.jpg", name: "Black ss" }
]

const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        ><Icon icon={text}/> </div>
    );
};

const ArrowLeft = Arrow({ text: 'left-arrow', className: 'scroll-menu-arrow-left' });
const ArrowRight = Arrow({ text: 'right-arrow', className: 'scroll-menu-arrow-right' });


export class CardSlides extends Component {

    renderItems = () => {
        return slideImages.map((item, index) => {
            return (
                <div style={{ width: "400px", height: "500px", backgroundImage: `url(${item.url})`, backgroundSize: "cover", backgroundPosition: "center" }} key={index}>
                    <div className="p-3" style={{ width: "100%", height: "100%" }}>
                        <div style={{ borderColor: "#ffffff", position: "relative", borderStyle: "solid", borderWidth: "2px", borderRadius: "10px", width: "100%", height: "100%" }}>
                            <div className="p-4 text-white" style={{ position: "absolute", bottom: 0, left: 0 }} >
                                <p className="h5">{item.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render = () => {
        return (
            <div className="fluid-container">
                <ScrollMenu
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    data={this.renderItems()}
                    wrapperStyle={{ width: "100%" }}
                    alignCenter={false}
                />
            </div>
        )
    }
}