import React, {Fragment} from 'react';
import Header from "./Components/Molecules/Header";
import Footer from './Components/Molecules/Footer';
import Content from "./Components/Molecules/Content";
import {Route, Switch} from "react-router";



export default function App() {
  return (
    <Fragment>
        <Header/>
        <Content/>
        <Switch>
          <Route />
          <Route />
          <Route />
        </Switch>
        <Footer/>
    </Fragment>
  );
}
