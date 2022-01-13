/**
    * @description      : 
    * @author           : Winner
    * @group            : 
    * @created          : 14/01/2022 - 01:46:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/01/2022
    * - Author          : Winner
    * - Modification    : 
**/
import { useMoralis, useNativeBalance } from "react-moralis";
import React, { Component, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AssetPath from '../../helpers/AssetHelper.js'

const ConnectWalletButton = (props) => {

    const { authenticate, isAuthenticated, account, chainId, logout } = useMoralis();
    const { data: balance } = useNativeBalance(props);

    const ConnectWallet = async () => {
        try {
            await authenticate({ provider: "injected" });
            window.localStorage.setItem("connectorId", "injected");
        } catch (e) {
            console.error(e);
        }
    }

    if (!(isAuthenticated && account)) {
        return (
            <>
                <button className="btn btn-grad btn-sm mr-2" onClick={ConnectWallet}>
                    {/* <i className="ri-wallet-3-line"></i> */}
                    <img width="45" src={`${AssetPath("img/icons/metamask.svg")}`} alt="" />
                    Connect wallet
                </button>
            </>
        )
    }

    return (
        <>
            <div className="header__avatar">
                <div className="price">
                    <span>{balance.formatted} </span>
                </div>
                <img
                    className="avatar"
                    src={`${AssetPath("img/avatars/Ronaldo/1.jpg")}`}
                    alt="avatar"
                />
            </div>
            {/* <div className="space-y-20">
                <div className="d-flex align-items-center justify-content-between">
                    <span> 13b9ebda035r178... </span>
                    <a href="/" className="ml-2">
                        <i className="ri-file-copy-line"></i>
                    </a>
                </div>
                <div className="d-flex align-items-center space-x-10">
                    <img
                        className="coin"
                        src="assets/img/logos/coin.svg"
                        alt="/"
                    />
                    <div className="info">
                        <p className="text-sm font-book text-gray-400">Balance</p>
                        <p className="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="links space-y-10">
                    <a href="#">
                        <i className="ri-landscape-line"></i> <span> My items</span>
                    </a>
                    <a href="edit_profile.html">
                        <i className="ri-pencil-line"></i> <span> Edit Profile</span>
                    </a>
                    <a href="#">
                        <i className="ri-logout-circle-line"></i> <span> Logout</span>
                    </a>
                </div>
            </div> */}
        </>
    )


}

export default ConnectWalletButton