import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { CheckCircleOutlined } from '@mui/icons-material';
AboutUsItem.propTypes = {

};

function AboutUsItem({ icon, title, title2 }) {
    return (
        <div className='about-us-item'>
            <div className="item-icon">  {icon}</div>
            <div className="item-main">
                <div className="title">
                    {title}
                </div>
                <div className="title-bold">
                    {title2}
                </div>

            </div>
        </div>
    );
}

export default AboutUsItem;