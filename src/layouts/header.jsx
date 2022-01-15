/**
    * @description      : 
    * @author           : Winner
    * @group            : 
    * @created          : 13/01/2022 - 22:03:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/01/2022
    * - Author          : Winner
    * - Modification    : 
**/
import React, { Component, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AssetPath from '../helpers/AssetHelper.js'
import ConnectWalletButton from '../components/connectWalletButton'

const Header = (props) => {

    return (
        <header className="header__1 js-header" id="header">
            <div className="container-fluid">
                <div className="wrapper js-header-wrapper">
                    <div className="header__logo">
                        <Link to="/">
                            <img
                                className="header__logo"
                                id="logo_js"
                                src={`${AssetPath('img/logos/logo_bwindi.svg')}`}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder="Search" />
                        <button className="header__result">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>

                    <div className="header__menu">
                        <ul className="d-flex space-x-30">
                            <li>
                                <Link className="color_black" to="marketplace"> Marketplace</Link>
                            </li>
                            <li>
                                <Link className="color_black" to="browse"> Browse</Link>
                            </li>
                            
                            <li>
                                <Link className="color_black" to="discover"> Discover</Link>
                            </li>
                            <li>
                                <Link className="color_black" to="create"> Create</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-x-20 d-flex flex-column flex-md-row sm:space-y-20">
                        <a className="btn btn-white" href="Marketplace.html">Login</a>
                        <a className="btn btn-primary" href="Upload-type.html">SignUp</a>
                    </div>
                    <div className="header__burger js-header-burger"></div>

                    <div className="header__mobile js-header-mobile">
                        <div className="header__mobile__menu space-y-40">
                            <ul className="d-flex space-y-20">
                                <li> <Link className="color_black" to="Marketplace.html"> Marketplace</Link> </li>
                                <li> <Link className="color_black" to="Collections.html"> Browse</Link> </li>
                                <li> <Link className="color_black" to="Profile.html"> Discover</Link> </li>
                                <li> <Link className="color_black" to="Creators.html"> Create</Link> </li>

                            </ul>
                            <div className="space-y-20">
                                <div className="header__search in_mobile w-full">
                                    <input type="text" placeholder="Search" />
                                    <button className="header__result">
                                        <i className="ri-search-line"></i>
                                    </button>
                                </div>
                                <Link className="btn btn-grad btn-sm" to="Connect-wallet.html">Connect
                                    wallet</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;