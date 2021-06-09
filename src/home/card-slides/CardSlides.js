import { Component } from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Icon } from "rsuite";
import { ReactComponent as LeftArrowIcon } from './left-icon.svg'
import { ReactComponent as RightArrowIcon } from './right-icon.svg'

import './style.scss'


// list of items
const slideImages = [
  { url: `${process.env.PUBLIC_URL}/images/4.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/3.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/11.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/7.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/1.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/12.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/10.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/8.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/9.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/5.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/christ.jpg`, name: "Pink Sand" },
  { url: `${process.env.PUBLIC_URL}/images/121.jpeg`, name: "Pink Sand" },
]

class SliderLeftArrow extends Component {

  render() {
    return (
      
      <div
        className="slider__arrow slider__arrow--left"
      >
        <LeftArrowIcon />
      </div>
    );
  }
}

class SliderRightArrow extends Component {
  render() {
    return (
      <div
        className="slider__arrow slider__arrow--right"
      >
        <RightArrowIcon />
      </div>
    );
  }
}


export class CardSlidesComponent extends Component {

  renderItems = () => {
    return slideImages.map((item, index) => {
      return (
        <div className="card-slide-item" style={{ backgroundImage: `url(${item.url})`, backgroundSize: "cover", backgroundPosition: "center"}} key={index}>
          <div className="p-3" style={{ width: "100%", height: "100%" }}>
            <div style={{ borderColor: "#ffffff", position: "relative", borderStyle: "solid", borderWidth: "2px", borderRadius: "10px", width: "100%", height: "100%" }}>
              <div className="p-4 text-white" style={{ position: "absolute", bottom: 0, left: 0 }} >

              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render = () => {
    return (
      <div style={{position: "relative", backgroundColor:"#1B9EB2"}}>
        <ScrollMenu
          ref={this.scrollMenu}
          arrowLeft={<SliderLeftArrow/>}
          arrowRight={<SliderRightArrow/>}
          data={this.renderItems()}
          wrapperStyle={{ width: "100%" }}
          alignCenter={false}
          wheel={false}
          inertiaScrolling={true}
        />
          <div style={{ position: "absolute", top: "-5%", width: "100%" }}>
                    <div className="row justify-content-center" style={{ color: "#1B9EB2", margin: "auto",' --bs-gutter-x': '6.5rem' }}>
                        <div className="col-auto" style={{ paddingLeft: 0, }}>
                            <div className=" text-center p-4 ps-5 pe-5 header-heading text-white" style={{borderRadius: "10px", boxShadow: "#44444422 5px 5px",  backgroundColor: "#1B9EB2",  fontWeight: 'bold' }} >POSTCARDS FROM THE PHILIPPINES</div>
                        </div>
                    </div>
                </div>
          </div>
    )
  }
}