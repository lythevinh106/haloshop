import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";
import AboutUsItem from './AboutUsItem/AboutUsItem';
import { CheckCircleOutlined, HeadphonesOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { ShoppingCartOutlined } from '@ant-design/icons';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
AboutUs.propTypes = {

};

function AboutUs(props) {
    return (
        <div className='about-us-wrapper'>
            <AboutUsItem icon={<CheckCircleOutlined />} title="Sản Phẩm" title2="Chính Hãng" />
            <AboutUsItem icon={<ShoppingCartCheckoutOutlined />} title="Sản Phẩm" title2="Chính Hãng" />
            <AboutUsItem icon={<HeadphonesOutlined />} title="Sản Phẩm" title2="Chính Hãng" />
            <AboutUsItem icon={<PublishedWithChangesIcon />} title="Sản Phẩm" title2="Chính Hãng" />

        </div>
    );
}

export default AboutUs;