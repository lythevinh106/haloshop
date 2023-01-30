import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { LinearProgress } from '@mui/material';
import cln from "classnames"
ProgressHeader.propTypes = {

};

function ProgressHeader({ active }) {


    const classes = cln("progress-header-wrapper", {

        active
    })

    return (
        <div className={classes}>
            <LinearProgress color="inherit"

                sx={{
                    backgroundColor: "#fff",


                    color: {
                        xs: "secondary"
                    },

                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                }} />
        </div>
    );
}

export default ProgressHeader;