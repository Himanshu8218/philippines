import { Component } from "react";
import { CardSlidesComponent } from "./card-slides/CardSlides";
import { HeaderComponent } from "./header/Header";
import { MapComponent } from "./map/Map";
import { FooterComponent } from "./Footer";

export class HomeScreen extends Component {
    render = () => {
        return (
            <div>
                <HeaderComponent />
                <MapComponent />
                <CardSlidesComponent />
                <FooterComponent />
            </div>
        )
    }
}