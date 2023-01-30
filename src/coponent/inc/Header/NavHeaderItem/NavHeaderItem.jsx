import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import "./style.scss"

import cln from "classnames"
import { Link, useNavigate } from 'react-router-dom';




NavHeaderItem.propTypes = {

    title: PropTypes.string.isRequired,
    onClick: PropTypes.func



};

NavHeaderItem.defaultProps = {

    title: "",
    onClick: () => {

    }


}

function NavHeaderItem({ icon = <Fragment></Fragment>, title, slug = "",
    catType = false, fontThin = false, notSlug = false,

    onClick = () => { } }) {





    // let navigate = useNavigate();


    const handleOnClick = () => {

        onClick(slug)

    }


    const props = {
        onClick: catType ? handleOnClick : () => {

        }
    }





    const classes = cln(
        "item", {
        "item--cat": catType,



    }
    )



    return (
        <li

            onClick={handleOnClick}
            className={classes} {...props}

        >
            <span className="item_icon">
                {icon}
            </span>

            <div className="item_title">
                {title}
            </div>
        </li>
    );
}

export default NavHeaderItem;