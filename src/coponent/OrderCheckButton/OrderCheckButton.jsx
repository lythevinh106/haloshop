import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import { Link, useNavigate } from 'react-router-dom';
import { fontSize } from '@mui/system';
OrderCheckButton.propTypes = {

};
const actions = [
    {
        icon: <FindReplaceIcon sx={{ fontSize: 20 }}
        />, name: 'TRA MÃ VẬN ĐƠN'
    },

];

function OrderCheckButton(props) {

    const navigate = useNavigate();

    const handleOnclick = () => {
        navigate("/order/check")

    }
    return (
        <Box sx={{
            position: "fixed", height: 320, transform: 'translateZ(0px)',


            flexGrow: 1, bottom: "20px", left: "5px"
        }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{
                    "button": {
                        backgroundColor: "rgb(0, 72, 61)"
                    },
                }}
                icon={< LocalShippingIcon sx={{ fontSize: 30, }} />}
            >
                {actions.map((action) => (

                    <SpeedDialAction
                        onClick={handleOnclick}
                        sx={{
                            color: "#fff",
                            backgroundColor: "rgb(0,72,61)",
                            "&:hover": {

                                color: "#fff",
                                backgroundColor: "rgb(0,72,61)"
                            }
                        }}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />

                ))}
            </SpeedDial>
        </Box>
    );
}

export default OrderCheckButton;