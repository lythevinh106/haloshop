import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Skeleton } from '@mui/material';

SkeletonCat.propTypes = {

};

function SkeletonCat(props) {
    return (


        <Box sx={{ width: "100%", height: "60px", backgroundColor: "rgb(229, 229, 229)" }} >
            <Skeleton sx={{ width: "100%", height: "60px", backgroundColor: "rgb(229, 229, 229)" }}
                animation="wave" />
        </Box>

    );
}

export default SkeletonCat;