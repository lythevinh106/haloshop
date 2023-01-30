import React, { memo } from 'react';
import PropTypes from 'prop-types';


import "./style.scss"
import cln from "classnames"

PopperWrapper.propTypes = {

};

function PopperWrapper({ children, bigShadow, bgGrey = false, bubble = false }) {



    // console.log("day la comp popper wrapper")



    return (
        <div className={cln("popper-wrapper", {
            "big-shadow": bigShadow,
            "grey": bgGrey,
            "bubble": bubble

        })}>
            {children}
        </div>

    )
}

export default memo(PopperWrapper);