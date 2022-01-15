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

const SimpleCard = () => {
    return (
        <div className="card__item fluid four shadow">
            <div className="card_body">
                <div className="card_head">
                    <Link to="#">
                        <img
                            src={`${AssetPath("img/bg/welcome_bg.png")}`}
                            alt="item img" />
                    </Link>
                </div>
                
                <div className="card_footer pauid d-block space-y-10">
                    <div className="d-flex
                        align-items-center
                        space-x-10
                        justify-content-between">
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
                        <i className="ri-error-warning-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCard