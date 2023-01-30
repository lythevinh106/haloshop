import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: '#fff',
    borderRadius: "20px",
    boxShadow: 24,
    outline: "none",
    p: 4,



};


function ModalWrapper({ open, onClose, component = <></> }) {

    return (
        <Box>



            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid sx={{
                    ...style, width: {
                        xs: "100%",


                        lg: "70%",

                    },
                }}



                >
                    <CancelRoundedIcon sx={{
                        fontSize: "30px",
                        color: "red",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "6px",
                        right: "6px",
                        cursor: "pointer",



                    }} onClick={onClose} />
                    {component}
                </Grid>
            </Modal>
        </Box >
    );
}

export default ModalWrapper;