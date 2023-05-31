import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import Face6Icon from '@mui/icons-material/Face6';
import ContactsIcon from '@mui/icons-material/Contacts';
const emails = ['username@gmail.com', 'user02@gmail.com'];


export default function DialogInfo({
    isOpen,
    onClose,
    onLogoutClick = () => { },
    onInfoClick = () => { },
    name = ""

}) {


    // const { onClose, selectedValue, open } = props;
    // const handleClose = () => {
    //     onClose();
    //     console.log("close")

    // };

    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };

    return (
        <Dialog sx={{
            top: "-250px",
            borderRadius: "10px",


        }} onClose={onClose} open={isOpen}>
            <DialogTitle sx={{
                fontSize: "16px",
                textAlign: "center",
                fontWeight: "bold",
                color: "rgb(0,36,30)",
                minWidth: "200px",
                // padding: "3px 10px",,



            }}>
                <Face6Icon fontSize='large'></Face6Icon>
                {/* <Typography fontSize="18px" fontWeight="bold">{name}</Typography> */}
            </DialogTitle>
            <List sx={{ padding: "0px" }}>



                <ListItem >
                    <ListItemButton sx={{
                        display: "flex",
                        justifyContent: "fled-start",
                        padding: "0px",


                    }}

                        onClick={onInfoClick}

                    >


                        <ContactsIcon />

                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", marginLeft: "25px" }} >Thông Tin</Typography>
                        {/* <ListItemText sx={{ marginLeft: "10px", fontSize: "25px", fontWeight: "bold" }} primary={email} /> */}
                    </ListItemButton>



                </ListItem>
                <ListItem >
                    <ListItemButton sx={{
                        display: "flex",
                        justifyContent: "fled-start",
                        padding: "0px",


                    }}

                        onClick={onLogoutClick}

                    >


                        <LogoutIcon />

                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", marginLeft: "25px" }} >Thoát</Typography>
                        {/* <ListItemText sx={{ marginLeft: "10px", fontSize: "25px", fontWeight: "bold" }} primary={email} /> */}
                    </ListItemButton>


                </ListItem>



            </List>
        </Dialog >
    );
}

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);
//         setSelectedValue(value);
//     };

//     return (
//         <div>
//             <Typography variant="subtitle1" component="div">
//                 Selected: {selectedValue}
//             </Typography>
//             <br />
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Open simple dialog
//             </Button>
//             <SimpleDialog
//                 selectedValue={selectedValue}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// }
