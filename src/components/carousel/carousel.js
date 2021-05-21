import React, { Component } from "react";
import { ReactComponent as LeftArrowIcon } from './left-icon.svg'
import { ReactComponent as RightArrowIcon } from './right-icon.svg'

import './style.scss'

class CarouselLeftArrow extends Component {

  render() {
    return (   
      <div
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
          <LeftArrowIcon />
      </div>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <div
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <RightArrowIcon />
      </div>
    );
  }
}


class CarouselSlide extends Component {
  render() {
      const { index, activeIndex, renderer, slide} = this.props
    return (
      <li
        className={
          index == activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
       {renderer(slide, index)}
      </li>
    );
  }
}

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { items } = this.props;
    let slidesLength = items.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { items } = this.props;
    let slidesLength = items.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { items, children }  = this.props
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {items.map((slide, index) =>
          ( <CarouselSlide
           key={index}
           index={index}
           activeIndex={this.state.activeIndex}
           slide={slide}
           renderer={children}
         />)
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
      </div>
    );
  }
}