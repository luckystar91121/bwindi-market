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
import React, { Component, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import logo from '../logo.png';
import './App.css';
import '../assets/css/plugins/remixicon.css'
import '../assets/css/plugins/bootstrap.min.css'
import '../assets/css/plugins/swiper-bundle.min.css'
import '../assets/css/style.css'
import DarkBackground from '../assets/img/bg/in_hero1_dark.png'
import Logo from '../assets/img/logos/Logo.svg'
import MetamaskLogo from '../assets/img/icons/metamask.svg'
import AssetPath from '../helpers/AssetHelper.js'

import { MoralisProvider, useMoralis } from "react-moralis";

import Layout from '../layouts'

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const App = (props) => {

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      {/* <Layout> */}
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </Router>
      {/* </Layout> */}
    </MoralisProvider>
  );

}

export default App;
