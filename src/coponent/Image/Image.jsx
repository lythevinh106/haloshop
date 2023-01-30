import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
Image.propTypes = {

};

function Image({ src, alt, ...props }) {

    const [ImageErr, setImageErr] = useState("");
    // console.log(src);


    const handleError = () => {


        setImageErr(noImage)
    }
    let noImage = "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"


    return (
        <>
            <img  {...props} src={ImageErr || src} alt={alt || ""} onError={handleError} />

        </>
    );
}

export default Image;