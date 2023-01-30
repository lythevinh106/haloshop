import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import cln from "classnames"
import "./style.scss"
import { Link } from 'react-router-dom';
Button.propTypes = {

};

function Button({ typeComp = "button", type = "text", onClick = () => { },
    btnGreen = false, children, className, btnWhite = false, btnRed = false, to, href,
    btnYellow = false, disabled = false, SizeNormal = false, sizeSmall = false, sizeBig = false,
    rounded = false,

    passProps
}) {


    const classes = cln(
        "btn-wrapper", {

        "btn--red": btnRed,
        "btn--yellow": btnYellow,
        "btn--green": btnGreen,
        "btn--white": btnWhite,
        "btn--disabled": disabled,
        "btn--size-normal": SizeNormal,
        "btn--size-small": sizeSmall,
        "btn--size-big": sizeBig,
        "btn--rounded": rounded,




        // "btn--with-icon": withIcon ? true : false,



        [className]: className


    }

    )

    // const handelOnClick = () => {
    //     onClick();
    // }


    const props = {
        onClick,
        ...passProps

    }
    let Comp = "button";

    if (to) {

        props.to = to;
        Comp = Link

    } else if (href) {
        props.href = href;
        Comp = "a"

    }


    // console.log("day la component button")

    return (
        <Comp className={classes}  {...props} type={type} >
            <span className='btn-core'>
                {children}
            </span>

        </Comp>
    );
}

export default memo(Button);