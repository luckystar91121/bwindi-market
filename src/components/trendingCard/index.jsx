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

const TrendingCard = () => {
    return (
        <div className="creator_item creator_card space-y-10">
            <div className="avatars flex-column space-y-10">
                <div className="cover">
                    <Link to="Item-details.html">
                        <img
                            src={`${AssetPath("img/nfts/2.jpg")}`}
                            alt="item img" />
                    </Link>
                </div>
                <div className="media">
                    <Link to="Profile.html">
                        <img
                            className='avatar avatar-md'
                            src={`${AssetPath("img/avatars/dragon1.png")}`}
                            alt="item img" />
                    </Link>
                </div>
                <h6 className="card_title pauid-top text-center">
                    <Link className="color_black"
                        to="Item-details.html">
                        EulerBeats Enigma
                    </Link>
                    <p className='txt_xs'>by &nbsp;<Link to="#"> Coldie </Link></p>
                </h6>
                <div className="card_footer pauid d-block space-y-10">
                    <div className="card_footer justify-content-center">
                        <div className="creators">
                            <p className="txt_xs text-center">A shrouded entity existing in the approximate future</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard