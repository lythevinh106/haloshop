import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

import InputField from '../Form/InputField/InputField';
ControlOrder.propTypes = {

};

function ControlOrder({ children, btnLessOnClick = () => { }, btnPlusOnClick = () => { } }) {


    // console.log("day la controller");


    const handelBtnLessClick = (e) => {


        btnLessOnClick();



    }


    const handelBtnPlusClick = (e) => {

        btnPlusOnClick(e);



    }





    return (
        <div className="control-oder-wrapper"

        >

            <button className='control control--less'
                onClick={handelBtnLessClick}


            >-</button>
            <div className="control__input">



                {children}




            </div>

            <button
                onClick={handelBtnPlusClick}

                className='control control--plus'>+</button>
        </div >
    );
}

export default memo(ControlOrder);