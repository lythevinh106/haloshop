import React from 'react';
import PropTypes from 'prop-types';

import Snowfall from 'react-snowfall'

import hoadao from "./../../storage/images/hoadao.png"
import Tet2 from "./../../storage/images/tet2.png"

import style from "./style.scss";
import cl from "classnames";
const snowLake = document.createElement("img");
snowLake.src = hoadao;

const images = [snowLake];
LayoutModeLunarNewYear.propTypes = {

};

function LayoutModeLunarNewYear({ children, layerMode = false }) {

    return (
        <div className='lunar-mode-layout'>



            <div className='lunar-year-left'>

            </div>

            <div className='lunar-year-right'>

            </div>

            <div className={cl('effect-lunar', {

                ["layer-mode"]: layerMode

            })
            }>
                <Snowfall
                    style={{

                        position: "fixed",
                        width: "100%",
                        height: "100%"
                    }}
                    snowflakeCount={80}
                    radius={[10, 20]}
                    speed={[0.5, 2.5]}
                    wind={[-0.5, 2]}
                    images={images}
                    rotationSpeed={[-1, 1]}

                />
            </div>

            {children}
        </div >
    );
}

export default LayoutModeLunarNewYear;







