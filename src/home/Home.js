import { Component } from "react";
import { CardSlidesComponent } from "./card-slides/CardSlides";
import { HeaderComponent } from "./header/Header";
import { MapComponent } from "./map/Map";

export class HomeScreen extends Component {
    render = () => {
        return (
            <div>
                <HeaderComponent />
                <MapComponent />
                <CardSlidesComponent />
            </div>
        )
    }
}