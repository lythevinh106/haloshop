import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// import DrawerCreate from './DrawerCreate/DrawerCreate';
import CloseIcon from '@mui/icons-material/Close';
import Close from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';


// import { CategoryContext } from '../../context/CategoryContext';
function DrawerMain({ component = <></>, isDrawer = false, setIsClose = () => { } }) {

    // const { isDrawer, setIsClose } = useContext(ProductContext);

    return (
        <Box sx={{ position: "relative" }}>
            <SwipeableDrawer
                anchor={"left"}
                open={isDrawer}
                onClose={setIsClose}
                onOpen={
                    () => {

                    }
                }

            >
                <Box onClick={() => {
                    setIsClose()
                    // console.log("tat")
                }


                }
                    sx={{
                        position: "absolute",
                        top: "2px",
                        right: "1px",
                        zIndex: 9

                    }}>

                    <Close sx={{
                        backgroundColor: "red",
                        borderRadius: "50%"
                        , padding: "5px",
                        color: "white",
                        cursor: "pointer",


                    }} /></Box>

                {component}

            </SwipeableDrawer >


        </Box >
    );
}

export default DrawerMain