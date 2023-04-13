import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as urls from "./app/constants/urls";

import history from "./history"; // added so we can handle programatic navigation

import "./app/css/front.css";

import Welcome from "./app/components/Views/Welcome/Welcome";
import GelatoView from "./app/components/Views/Gelato/GelatoView";
import BaseView from "./app/components/Views/Gelato/BaseView";
import DrinksView from "./app/components/Views/Drinks/DrinksView";
import SyrupView from "./app/components/Views/Syrups/SyrupView";
import QRView from "./app/components/Views/QRCode/QRView";

/*
const RouteGuard = (Component) => ({ match }) => (
!store.getState().session.authenticated ? <Redirect to="/"/> : <Component match={match}/>;
  <Redirect to={urls.login.route} />
);
*/

//TODO: Upgrade react-router-dom when it fucking works

export const App = () => (
  <BrowserRouter history={history}>
    {/* Routes are matched with a 'contains' method. So adding the 'exact' prop makes sure we go to the exact correct url */}
    {/* Switch ensures to show only 1 component when dealing with similar URLs 'path/action/new' and 'path/action/:id' that Route would interpret as 1 route */}
    <Routes>
      {/* <Route exact path="/" component={ConnectedLogin} />
      <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} /> */}

      {/*TODO: Fix the rest of the elements*/}
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/" element={<Welcome />} />
      <Route path={urls.gelato.route} element={<GelatoView />} />
      <Route path={urls.base.route} element={<BaseView />} />
      <Route path={urls.drinks.route} element={<DrinksView />} />
      <Route path={urls.syrup.route} element={<SyrupView />} />
      <Route path={urls.qr.route} element={<QRView />} />

      {/* <Route path={urls.randomNameGenerator.route} exact component={RandomNameGenerator} /> */}
    </Routes>
  </BrowserRouter>
);

// render the App component in the root div inside the public/index.html file
ReactDOM.render(
    <App />,
  document.querySelector("#root")
);
