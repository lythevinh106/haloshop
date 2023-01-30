import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@mui/material';

import Button from '../Button/Button';
import CloseIcon from '@mui/icons-material/Close';
import "./style.scss";

import ProductInfoPayment from '../ProductInfo/ProductInfoPayment/ProductInfoPayment';
ModalBuyNow.propTypes = {

};

function ModalBuyNow({ productInfoCenter, open, onClick = () => {

} }) {

    // const [isOpen, setIsOpen] = useState(open);
    // console.log("popent con", isOpen);


    const handleBtnCloseOnClick = () => {
        onClick()
    }

    // useEffect(() => {
    //     setIsOpen(open)
    // }, [open])

    // console.log("day la lay out cua product info - moddal buy now");

    return (
        <Modal
            open={open}

            sx={{ overflowY: "scroll" }}
        // onClose={false}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        >
            <div className='modal-wrapper' >
                <div className="modal__btn-close">
                    <Button rounded btnRed
                        onClick={handleBtnCloseOnClick}
                    >
                        <CloseIcon /></Button>


                </div>

                <div className="modal-main">
                    <ProductInfoPayment productInFo={productInfoCenter} onClose={handleBtnCloseOnClick} />
                </div>

            </div>
        </Modal>
    );
}

export default memo(ModalBuyNow);