import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Snowfall from 'react-snowfall'

import snow from "./../../storage/images/snow.png"




const snowLake = document.createElement("img");
snowLake.src = snow;

const images = [snowLake];
LayoutModeSnowEffect.propTypes = {

};

function LayoutModeSnowEffect({ children }) {
    return (
        <div className='snow-mode-layout'>


            <div className='effect-snow'>
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
        </div>
    );
}

export default LayoutModeSnowEffect;