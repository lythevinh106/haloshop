import React, { memo } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../Image/Image';

import cln from "classnames"
import PopperWrapper from '../PopperWapper/PopperWrapper';
SubBanner.propTypes = {

};

function SubBanner({ listBanner, col1 = false, col2 = false, col3 = false }) {

    // console.log("day la sub banner")

    const classes =
        cln(
            'sub-banner-wrapper', {
            col1,
            col2,
            col3

        }

        )




    return (
        <div className={classes}>
            {



                // listBanner && (

                listBanner.map((banner) => {
                    return (
                        <div className='sub-banner__img' key={banner.id}>
                            <PopperWrapper >


                                <Image src={banner.image} />



                            </PopperWrapper>
                        </div>
                    )



                })






                // )

            }




        </div >
    );
}

export default memo(SubBanner);