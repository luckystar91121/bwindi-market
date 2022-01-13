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
import AssetPath from '../../../helpers/AssetHelper'
import CollectionComponent from '../../../components/collection'

const Collection = () => {
    return (
        <>
            <div className="section mt-100">
                <div className="container">
                    <div className="section__head">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="section__title"> Collections</h2>
                            <a href="Collections.html" className="btn btn-dark btn-sm">
                                View
                                All</a>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-30_reset">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <CollectionComponent />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <CollectionComponent />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <CollectionComponent />
                        </div>
                    </div>
                </div>
            </div>
            <div className="call2action">
                <div className="container">
                    <div className="row justify-content-between align-items-center
						sm:space-y-20">
                        <div className="col-md-6">
                            <div className="space-y-20">
                                <h1 className="text-white">Start your own
                                    collection today</h1>
                                <p className="color_text section__text">WhiteDragon is a shared
                                    liquidity NFT
                                    market smart contract
                                    which
                                    is used by multiple websites to provide the users the
                                    best
                                    possible experience.</p>
                                <a href="Connect-wallet.html" className="btn
									btn-primary">Start
                                    Collecting</a>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <img className="img-fluid img__logo"
                                src={`${AssetPath("img/nfts/3.jpg")}`}
                                width={320}
                                height={140}
                                alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection