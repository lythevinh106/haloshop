import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavHeaderItem from '../NavHeaderItem/NavHeaderItem';
import { MobileOutlined, ShoppingCartOutlined, UsbOutlined } from '@ant-design/icons';

import WatchIcon from '@mui/icons-material/Watch';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import MonitorIcon from '@mui/icons-material/Monitor';
import "./style.scss"
import { Link, useNavigate } from 'react-router-dom';
import SlugStr from '../../../../until/SlugStr/SlugStr';
import CategoryApi from '../../../../Service/CategoryApi';
import SkeletonCat from '../../../SkeletonComp/SkeletonCat';

CatHeader.propTypes = {

};

function CatHeader(props) {



    const [categories, setCategories] = useState([]);
    const [isLoadDing, setIsLoading] = useState(false)





    const navigate = useNavigate();





    const handleOnClick = (slug) => {

        navigate(`/${slug}`);

    }



    useEffect(() => {
        setIsLoading(true);

        (async () => {
            const response = await CategoryApi.getAllCategory({ limit: 20 });

            setCategories(response.data);
            setIsLoading(false);


        })();




    }, [])


    const processedData = [
        {
            slugField: "dien-thoai",
            icon: <MobileOutlined />
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

    // useEffect(() => {
    //     processedData.current=[
    //         {

    //         }
    //     ]

    // }, [categories])








    return (

        <>
            {
                isLoadDing ? <SkeletonCat /> :

                    <ul className='header-cat-wrapper'>


                        {processedData.map((data) => {

                            return (
                                categories.map((category) => {
                                    if (data.slugField == category.slug) {

                                        return (<NavHeaderItem key={category.id} onClick={handleOnClick} catType icon={data.icon}


                                            slug={category.slug}
                                            title={category.name} />)
                                    }

                                })
                            )

                        })}



                    </ul>

            }
        </>
    );
}

export default CatHeader;