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

import NFTCard from '../../../components/nftCard'

const Explore = () => {
    return (
        <>
            <div className="mt-100">
                <div className="container">
                    <div className="section__head">
                        <div className="d-md-flex
							sm:space-y-20
							space-x-20
							justify-content-between
							align-items-center">
                            <h2 className="section__title text-center">Explore</h2>
                            <ul className="menu_categories space-x-20">
                                <li>
                                    <Link to="#" className="color_brand">

                                        <span> All </span>
                                    </Link>
                                </li>
                                <li> <Link to="#">
                                    <i className="ri-gamepad-line"></i> <span> Games </span>
                                </Link>

                                </li>
                                <li> <Link to="#">
                                    <i className="ri-brush-line"></i> <span> Art </span>
                                </Link>

                                </li>
                                <li> <Link to="#">
                                    <i className="ri-stock-line"></i> <span> Trading Cards </span>
                                </Link>

                                </li>
                                <li> <Link to="#">
                                    <i className="ri-music-line"></i> <span> Music </span>
                                </Link>

                                </li>
                                <li> <Link to="#">
                                    <i className="ri-global-line"></i> <span> Domain Names </span>
                                </Link>

                                </li>
                                <li> <Link to="#">
                                    <i className="ri-emotion-laugh-line"></i> <span> Memes </span>
                                </Link>

                                </li>
                                <li> <Link to="#">
                                    <i className="ri-layout-4-line"></i> <span> Collectibles </span>
                                </Link>

                                </li>
                            </ul>				<div className="dropdown text-center">
                                <button className="btn btn-white btn-sm dropdown-toggle"
                                    type="button"

                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Recent Active
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <NFTCard />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="Marketplace.html" className="btn btn-sm btn-white">
                            <i className="ri-restart-line"></i>
                            View all items
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore