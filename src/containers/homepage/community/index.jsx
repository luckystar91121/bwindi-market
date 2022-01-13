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

const Community = () => {
    return (
        <>
            <div className="container">
                <div className="logos__wrap">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-auto col-md-12">
                            <h3 className="section__title md:mb-20 text-left d-flex
								justify-content-center">Loved
                                by
                                the community</h3>
                        </div>
                        <div className="col-lg-auto col-md-12">
                            <div className="d-flex flex-column flex-md-row
								justify-content-center
								space-x-20 sm:space-x-0 sm:space-y-20 align-items-center">
                                <img src={`${AssetPath("img/avatars/Ronaldo/1.jpg")}`} alt="" />
                                <img src={`${AssetPath("img/avatars/Ronaldo/2.jpg")}`} alt="" />
                                <img src={`${AssetPath("img/avatars/Ronaldo/3.jpg")}`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community