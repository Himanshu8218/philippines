import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { FooterComponent } from "./components/Footer";
import { Scrollbars } from 'react-custom-scrollbars';
import { NavbarComponent } from "./components/Navbar";
import { HomeScreen } from "./home/Home";

export default class App extends Component {
  render = () => {
    return (
      <div>
        <Scrollbars autoHide style={{height: "100vh", width: "100vw"}}>
          <HomeScreen/>
          <NavbarComponent />
          <FooterComponent />
        </Scrollbars>

      </div>

    );
  }
}

