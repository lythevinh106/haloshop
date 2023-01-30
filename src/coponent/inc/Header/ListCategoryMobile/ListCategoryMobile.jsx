import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Category, MobileOffOutlined } from '@mui/icons-material';
import { MobileOutlined, ShoppingCartOutlined, UsbOutlined } from '@ant-design/icons';
import WatchIcon from '@mui/icons-material/Watch';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import MonitorIcon from '@mui/icons-material/Monitor';
import CategoryApi from '../../../../Service/CategoryApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
ListCategoryMobile.propTypes = {

};

function ListCategoryMobile({ onCatMobileClick = () => { } }) {





    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {


        (async () => {
            const response = await CategoryApi.getAllCategory({ limit: 20 });

            setCategories(response.data);


        })();



        console.log(categories);
    }, [])


    const processedData = [
        {
            slugField: "dien-thoai",
            icon: <MobileOffOutlined />
        },

        {
            slugField: "lap-top",
            icon: <MonitorIcon />
        },
        {
            slugField: "tai-nghe",
            icon: <HeadphonesIcon />
        },
        {
            slugField: "phu-kien",
            icon: <UsbOutlined />
        },
        {
            slugField: "gia-dung",
            icon: <CoffeeMakerIcon />
        },

        {
            slugField: "dong-ho",
            icon: <WatchIcon />
        },

    ];

    const handleOnClick = (cat) => {

        // navigate(`/${slug}`);
        // console.log(cat.slug)
        navigate(`/${cat.slug}`);
        onCatMobileClick();

    }




    return (
        <>
            <List sx={{

                padding: "0px 0px"
            }}>
                <Typography sx={{
                    fontSize: "2.4rem",
                    textAlign: "center",
                    color: "#ffff",
                    fontWeight: "bold",
                    marginBottom: "15px",
                    backgroundColor: "#00483d",
                    padding: "2px 20px"




                }}> Danh Mục Sản Phẩm</Typography>

                {processedData.map((data) => {

                    return (


                        categories.map((cat, index) => {
                            if (data.slugField == cat.slug) {
                                return (

                                    <ListItem key={index} disablePadding sx={{
                                        borderBottom: "1px solid #00483d"
                                    }}



                                    >
                                        <ListItemButton onClick={() => handleOnClick(cat)}
                                            sx={{

                                                padding: "2px 10px"
                                            }}>
                                            <ListItemIcon sx={{
                                                minWidth: "auto",
                                                "svg": {
                                                    color: "#00483d"
                                                },


                                            }}>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={cat.name} sx={{
                                                color: "#00483d",
                                                marginLeft: "19px",

                                                "span": {
                                                    fontSize: "1.6rem",
                                                }

                                            }} />

                                            <ListItemIcon sx={{
                                                minWidth: "auto",


                                            }}>
                                                <NearMeIcon sx={{
                                                    fontSize: "1.3rem",
                                                    color: "#00483d",
                                                    marginLeft: "35px"
                                                }} />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }


                        }

                        ))
                })
                }



            </List>
        </>
    );
}

export default ListCategoryMobile;