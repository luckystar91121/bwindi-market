/**
    * @description      : 
    * @author           : Winner
    * @group            : 
    * @created          : 13/01/2022 - 23:55:03
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

import AssetPath from '../../helpers/AssetHelper.js'

const NFTCard = () => {
    return (
        <div className="card__item four">
            <div className="card_body space-y-10">
                {/* <!-- ===============  --> */}
                <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                        <Link to="Profile.html">
                            <img
                                src={`${AssetPath("img/avatars/Ronaldo/1.jpg")}`}
                                alt="Avatar"
                                className="avatar avatar-sm" />
                        </Link>
                        <Link to="Profile.html">
                            <p className="avatars_name txt_xs">@mickel_fenn</p>
                        </Link>
                    </div>
                    <div className="avatars space-x-3">
                        <Link to="Profile.html">
                            <img
                                src={`${AssetPath("img/avatars/Ronaldo/2.jpg")}`}
                                alt="Avatar"
                                className="avatar avatar-sm" />
                        </Link>
                        <Link to="Profile.html">
                            <p className="avatars_name txt_xs">@danil_pannini</p>
                        </Link>
                    </div>
                </div>
                <div className="card_head">
                    <Link to="Item-details.html">
                        <img
                            src={`${AssetPath("img/nfts/1.jpg")}`}
                            alt="item img" />
                    </Link>
                    <Link to="#" className="likes space-x-3">
                        <i className="ri-heart-3-fill"></i>
                        <span className="txt_sm">1.2k</span>
                    </Link>
                </div>
                {/* <!-- ===============  --> */}

                <h6 className="card_title">
                    <Link className="color_black"
                        to="Item-details.html">
                        Colorful Abstract Painting
                    </Link>
                </h6>
                <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                        <div className="creators">
                            <p className="txt_sm">4 in stock</p>
                        </div>
                        <Link to="#" className="">
                            <p className="txt_sm">
                                Price: <span className="color_green txt_sm">2.45
                                    ETH</span>
                            </p>
                        </Link>
                    </div>
                    <div className="hr"></div>
                    <div className="d-flex
                        align-items-center
                        space-x-10
                        justify-content-between">
                        <div className="d-flex align-items-center
												space-x-5">
                            <i className="ri-history-line"></i>
                            <Link to="#" data-toggle="modal"
                                data-target="#popup_history">
                                <p className="color_text txt_sm view_history" style={{ width: 'auto' }}>
                                    View History
                                </p>
                            </Link>
                        </div>
                        <Link className="btn btn-sm btn-primary" to="#"
                            data-toggle="modal"
                            data-target="#popup_bid">Place Bid
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard