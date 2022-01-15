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

const Notable = () => {
    return (
        <>
            <div className="section mt-100">
                <div className="container">
                    <div className="section__head">
                        <div className="d-md-flex
							sm:space-y-20
							space-x-20
							justify-content-center
							align-items-center">
                            <h2 className="section__title text-center">Notable Drops</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 col-sm-6">
                            <NFTCard />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <NFTCard />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <NFTCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notable