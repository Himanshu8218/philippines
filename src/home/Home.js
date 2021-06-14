import { Component } from "react";
import { CardSlidesComponent } from "./card-slides/CardSlides";
import { HeaderComponent } from "./header/Header";
import { MapComponent } from "./map/Map";
import { FooterComponent } from "./Footer";

export class HomeScreen extends Component {
    render = () => {
        console.log(this.props);
        return (
            <div>
                <HeaderComponent />
                <MapComponent history={this.props.history} />
                <CardSlidesComponent />
                <FooterComponent />
            </div>
        )
    }
}