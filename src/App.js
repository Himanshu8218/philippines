import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";
import { Map } from "./components/Map";
import { CardSlides } from "./components/card-slider/CardSlides";
import { Scrollbars } from 'react-custom-scrollbars';

export default class App extends Component {
  render = () => {
    return (
      <div>
        <Scrollbars autoHide style={{height: "100vh", width: "100vw"}}>
          <Header />
          <Map />
          <CardSlides />
          
          <Footer />
        </Scrollbars>

      </div>

    );
  }
}

