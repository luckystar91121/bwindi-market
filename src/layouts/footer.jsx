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
import React, { Component } from 'react';
import logo from '../logo.png';
import DarkBackground from '../assets/img/bg/in_hero1_dark.png'
import Logo from '../assets/img/logos/Logo.svg'
import MetamaskLogo from '../assets/img/icons/metamask.svg'
import AssetPath from '../helpers/AssetHelper.js'

const Footer = () => {
    return (
        <footer className="footer__1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 space-y-20">
                        <div className="footer__logo">
                            <a href="/">
                                <img src="../assets/img/logos/Logo.svg" alt="logo" id="logo_js_f" />
                            </a>
                        </div>
                        <p className="footer__text">
                            WhiteDragon is a shared liquidity NFT market smart contract
                        </p>
                        <div>
                            <ul className="footer__social space-x-10 mb-40">
                                <li> <a href=""> <i className="ri-facebook-line"></i> </a>
                                </li>
                                <li> <a href=""> <i className="ri-messenger-line"></i> </a>
                                </li>
                                <li> <a href=""> <i className="ri-whatsapp-line"></i> </a>
                                </li>
                                <li> <a href=""> <i className="ri-youtube-line"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <h6 className="footer__title">Raroin</h6>
                        <ul className="footer__list">
                            <li> <a href="Home1.html"> Home1 </a>
                            </li>
                            <li> <a href="Home2.html"> Home2
                            </a> </li>
                            <li> <a href="Home3.html"> Home3 </a> </li>
                            <li> <a href="Marketplace.html"> Marketplace
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6">
                        <h6 className="footer__title">Assets</h6>
                        <ul className="footer__list">
                            <li> <a href="Profile.html"> Profile </a>
                            </li>
                            <li> <a href="Creators.html"> Creators </a>
                            </li>
                            <li> <a href="Collections.html"> Colletctions </a>
                            </li>
                            <li> <a href="Activity.html"> Activity
                            </a> </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6">
                        <h6 className="footer__title">Company</h6>
                        <ul className="footer__list">
                            <li> <a href="Upload-type.html"> Upload Types </a>
                            </li>
                            <li> <a href="Upload.html"> Upload </a> </li>
                            <li> <a href="Connect-wallet.html"> Connect wallet
                            </a> </li>
                            <li> <a href="Item-details.html"> Item details </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="copyright text-center">
                    Copyright © 2021. Created with love by creabik.
                </p>
            </div>
        </footer>
    )
}

export default Footer;