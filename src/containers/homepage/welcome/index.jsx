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

import AssetPath from '../../../helpers/AssetHelper.js'
import SimpleCard from '../../../components/simpleCard'

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
                                        Discover, collet, and <br />
                                        sell extraordinary <br />
                                        NFTs
                                    </h1>
                                    <p className="hero__text txt">
                                        on the world's first & <br />
                                        largest NFT marketplace
                                    </p>
                                    <div className="space-x-20 d-flex flex-column flex-md-row
										sm:space-y-20">
                                        <a className="btn btn-primary" href="Marketplace.html">Explore</a>
                                        <a className="btn btn-white" href="Upload-type.html">Create</a>
                                    </div>
                                    <div className="">
                                        <a className="d-flex align-items-center" href="#"><i className="ri-play-circle-fill"></i>&nbsp;Learn more about open sea</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <SimpleCard />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome