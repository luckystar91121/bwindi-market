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
        <div className="collections space-y-10 mb-30">
            <a href="collections.html">
                <div className="collections_item">
                    <div className="images-box space-y-10">
                        <div className="top_imgs">
                            <img
                                src={`${AssetPath("img/avatars/Ronaldo/1.jpg")}`}
                                alt="" />
                            <img
                                src={`${AssetPath("img/avatars/Ronaldo/2.jpg")}`}
                                alt="" />
                            <img
                                src={`${AssetPath("img/avatars/Ronaldo/3.jpg")}`}
                                alt="" />
                        </div>
                        <img
                            src={`${AssetPath("img/nfts/2.jpg")}`}
                            alt="" />
                    </div>
                </div>
            </a>
            <div className="collections_footer justify-content-between">
                <h5 className="collection_title"><a href="Collections.html">Creative Art collection</a></h5>
                <a href="#" className="likes space-x-3">
                    <i className="ri-heart-3-fill"></i>
                    <span className="txt_md">2.1k</span>
                </a>
            </div>
            <div className="creators space-x-10">
                <span className="color_text txt_md"> 5 items · Created by</span>
                <div className="avatars space-x-5">
                    <a href="Profile.html">
                        <img
                            src={`${AssetPath("img/avatars/Ronaldo/3.jpg")}`}
                            alt="Avatar" className="avatar avatar-sm" />
                    </a>
                </div>
                <a href="Profile.html">
                    <p className="avatars_name txt_sm"> @william_jamy... </p>
                </a>
            </div>
        </div>
    )
}

export default NFTCard