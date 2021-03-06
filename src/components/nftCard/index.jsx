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
        <div className="card__item four fluid">
            <div className="card_body space-y-10">
                <div className="card_head">
                    <Link to="Item-details.html">
                        <img
                            src={`${AssetPath("img/nfts/1.jpg")}`}
                            alt="item img" />
                    </Link>
                </div>

                <h6 className="card_title pauid-top text-center">
                    <Link className="color_black"
                        to="Item-details.html">
                        Art in Motion
                    </Link>
                </h6>
                <div className="card_footer pauid d-block space-y-10">
                    <div className="card_footer justify-content-center">
                        <div className="creators">
                            <p className="txt_sm text-center">A shrouded entity existing in the approximate future</p>
                        </div>
                    </div>
                    <div className="d-flex
                        align-items-center
                        space-x-10
                        justify-content-center">
                        <Link className="btn btn-sm btn-white" to="#"
                            data-toggle="modal"
                            data-target="#popup_bid">Live
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard