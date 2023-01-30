import React from 'react';
import PropTypes from 'prop-types';
import cln from "classnames"
import "./style.scss";
import PopperWrapper from '../PopperWapper/PopperWrapper';
TitleCart.propTypes = {

};

function TitleCart({ title = "", btnOrange }) {



    const classes = cln("title-cart", {
        "title-orange": btnOrange

    })

    return (
        <PopperWrapper>
            <div className={classes}>

                {title}

            </div>
        </PopperWrapper>
    );
}

export default TitleCart;