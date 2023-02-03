import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import cln from "classnames";
import logo from "./Dự án mới.png"
import "./style.scss"

import SearchInput from './SearchInput/SearchInput';
import NavHeader from './NavHeader/NavHeader';
import CatHeader from './CatHeader/CatHeader';
import ProgressHeader from '../../../ProgressHeader/ProgressHeader';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SkeletonCat from '../../SkeletonComp/SkeletonCat';





Header.propTypes = {

};

function Header({ }) {


    // const [isLoading, setIsLoading] = useState(false);
    const stateProgress = useSelector((state) => state.progress.value);










    return (
        <div className={cln("header-wrapper")}>
            <ProgressHeader active={stateProgress} />

            <div className={cln("header-main")}  >
                <Link className="header-logo" to={"/"}>

                    <img src={logo} alt="" />

                </Link>

                <span className='header-input'>


                    <SearchInput />
                </span>

                <span className='header-nav-header'>

                    <NavHeader />
                </span>


                <div className="header-cat">
                    <CatHeader />

                </div>


            </div>



        </div>
    );
}

export default memo(Header);