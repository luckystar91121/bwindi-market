/**
    * @description      : 
    * @author           : Winner
    * @group            : 
    * @created          : 13/01/2022 - 13:32:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/01/2022
    * - Author          : Winner
    * - Modification    : 
**/
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";

import Header from './header'
import Footer from './footer'
import Welcome from '../containers/homepage/welcome'
import Explore from '../containers/homepage/explore'
import Collection from '../containers/homepage/collection'
import Community from '../containers/homepage/community'

const Layout = (props, {children}) => {
    return (
        <div className="body is__dark">
            <Header />
            <Welcome />
            <Explore />
            <Collection />
            <Community />
            <Footer />
        </div >
    );
}

export default Layout;
