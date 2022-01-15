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
import TrendingCard from '../../../components/trendingCard';

const Section = () => {
    return (
        <>
            <div className="section mt-100">
                <div className="container">
                    <div className="section__head">
                        <div className="d-flex justify-content-center align-items-center">
                            <h2 className="section__title"> Trending in</h2>
                            <div className="dropdown">
                                <Link className="section__title dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    &nbsp; all categories
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center d-flex">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <TrendingCard />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <TrendingCard />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <TrendingCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section