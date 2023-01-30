import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Tet2 from "./../../storage/images/tet2.png"
import LayoutModeLunarNewYear from '../LayoutModeLunarNewYear/LayoutModeLunarNewYear';
import { Button } from 'antd';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import progressSlice, { activeLayer } from '../../features/progress/progressSlice';
LayerNewYear.propTypes = {

};

function LayerNewYear({ children }) {

    const isCloseLayer = useSelector((state) => state.progress.isActiveLayer);
    const [isClose, setIsClose] = useState(isCloseLayer);


    useEffect(() => {

        setIsClose(isCloseLayer);
    }, [isCloseLayer])



    const dispatch = useDispatch();


    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(activeLayer(false));
    //     }, 000)
    // }, [])
    return (
        <>
            {isClose && <div onClick={() => {
                dispatch(activeLayer(false))


            }}>
                <div className='lunar-year-main'>
                    <img src={Tet2} alt="" />
                    <div className="new-year-wrapper">
                        <div className='new-year__title'>
                            Chúc Mừng Năm Mới
                        </div>

                    </div>


                    <div className='btn-off-lunar' >
                        <CancelIcon


                            onClick={() => {

                                dispatch(activeLayer(false))

                            }}
                            sx={{

                                fontSize: "40px",
                                color: "red",
                                zIndex: 55


                            }} />
                    </div>

                </div>



            </div>}


            {children}
        </>
    );
}

export default LayerNewYear;