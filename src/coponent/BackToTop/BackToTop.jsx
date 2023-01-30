import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import NavigationIcon from '@mui/icons-material/Navigation';
BackToTop.propTypes = {

};

function BackToTop(props) {



    const handleOnClick = () => {

        window.scrollTo({
            top: 50,
            behavior: "smooth"
        })


    }
    return (
        <div className='back-to-top-wrapper' onClick={handleOnClick}>
            <NavigationIcon />
        </div>
    );
}

export default BackToTop;