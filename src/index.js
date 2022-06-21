import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import * as urls from "./app/constants/urls";

import reducers from "./app/store/reducers";

import history from "./history"; // added so we can handle programatic navigation

import "./app/css/front.css";

import Login from "./app/components/Views/Login/Login";
import SignUp from "./app/components/Views/SignUp/SignUp";
import Welcome from "./app/components/Views/Welcome/Welcome";
import Account from "./app/components/Views/Accounts/AccountView";
import ChangePassword from "./app/components/Views/Accounts/PasswordView";
import EditSuppliers from "./app/components/Views/Suppliers/EditSuppliers";
import ScheduleView from "./app/components/Views/Schedule/ScheduleView";
import RecipeView from "./app/components/Views/Recipes/RecipeView";
import BaseView from "./app/components/Views/Recipes/BaseView";
import DrinksView from "./app/components/Views/Drinks/DrinksView";
import ForgotUserPassword from "./app/components/Views/Forgot/ForgotUserPassword";

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
      <Route path={urls.login.route} element={<Login />} />
      <Route path={urls.signup.route} element={<SignUp />} />
      <Route path={urls.account.route} element={<Account />} />
      <Route path={urls.changePass.route} element={<ChangePassword />} />
      <Route path={urls.suppliers.route} element={<EditSuppliers />} />
      <Route path={urls.sched.route} element={<ScheduleView />} />
      <Route path={urls.recipe.route} element={<RecipeView />} />
      <Route path={urls.base.route} element={<BaseView />} />
      <Route path={urls.drinks.route} element={<DrinksView />} />
      <Route path={urls.forgot.sched} element={<ScheduleView />} />
      <Route path={urls.forgot.route} element={<ForgotUserPassword />} />

      {/* <Route path={urls.randomNameGenerator.route} exact component={RandomNameGenerator} /> */}
    </Routes>
  </BrowserRouter>
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// render the App component in the root div inside the public/index.html file
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
