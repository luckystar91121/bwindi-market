/**
    * @description      : 
    * @author           : Winner
    * @group            : 
    * @created          : 13/01/2022 - 23:40:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/01/2022
    * - Author          : Winner
    * - Modification    : 
**/
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <div className="overflow-hidden">
                <div className="hero__1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero__left space-y-20">
                                    <h1 className="hero__title">
                                        Discover digital art
                                        and collect NFTs
                                    </h1>
                                    <p className="hero__text txt">WhiteDragon is a shared liquidity
                                        NFT
                                        market smart contract
                                        which
                                        is used by multiple websites to provide the users the
                                        best
                                        possible experience.</p>
                                    <div className="space-x-20 d-flex flex-column flex-md-row
										sm:space-y-20">
                                        <a className="btn btn-primary" href="Marketplace.html">View
                                            market</a>
                                        <a className="btn btn-white" href="Upload-type.html">
                                            Upload your item</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid w-full" id="img_js"
                                    alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome