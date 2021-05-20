import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";
import { Map } from "./components/Map";
import { CardSlides } from "./components/CardSlides";
import { Button } from "rsuite";

export default class App extends Component {
  render = () => {
    return (
      <div>
        <NavbarComponent/>
        <Header/>
        <Map/>             
        <CardSlides/>
        <Footer/>
        
      </div>

    );
  }
}

