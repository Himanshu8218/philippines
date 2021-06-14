import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link, withRouter
} from "react-router-dom";
import { FooterComponent } from "./components/Footer";
import { Scrollbars } from 'react-custom-scrollbars';
import { NavbarComponent } from "./components/Navbar";
import { HomeScreen } from "./home/Home";
import { AdventureScreen } from "./adventure/Adventure";

export default class App extends Component {
  render = () => {
    return (
      <Router>
        <Scrollbars autoHide style={{ height: "100vh", width: "100vw" }}>
          <AppRouterRender/>
          <NavbarComponent />
        </Scrollbars>
      </Router>
    );
  }
}

class AppRouter extends Component {
  render = () => {
    return (
      <Switch>
        <Route path="/adventure">
          <AdventureScreen history={this.props.history} />
        </Route>
        <Route path="/">
          <HomeScreen history={this.props.history} />
        </Route>
      </Switch>
    );
  }
}

const AppRouterRender = withRouter(AppRouter);