import React, {Fragment} from 'react';
import Header from "./Organizms/Header";
import Footer from './Organizms/Footer';
import Bostr from "./Pages/BostrLinks/Bostr";
import AboutUs from "./Pages/BostrLinks/AboutUs";
import Career from "./Pages/BostrLinks/Career";
import Contact from "./Pages/BostrLinks/Contact";
import Press from "./Pages/BostrLinks/Press";
import {Route, Switch} from "react-router";

export default function App() {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={Bostr}/>
                <Route path="/about us" component={AboutUs}/>
                <Route path="/career" component={Career}/>
                <Route path="/press" component={Press}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </Fragment>
    );
}
