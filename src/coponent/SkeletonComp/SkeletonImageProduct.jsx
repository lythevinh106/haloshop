import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Unstable_Grid2';
const Image = styled('img')({
    width: '100%',
});

export default function SkeletonImageProduct(props) {
    const { loading = false } = props;

    return (
        <div>
            <Box>
                <Skeleton animation="wave" width="421px" height="425px">

                </Skeleton>
            </Box>


            <Grid container spacing={2}>
                <Grid lg={4}>
                    <Skeleton animation="wave" width="100%" height="68px">

                    </Skeleton>
                </Grid>
                <Grid lg={4}>
                    <Skeleton animation="wave" width="100%" height="68px">

                    </Skeleton>
                </Grid>
                <Grid lg={4}>
                    <Skeleton animation="wave" width="100%" height="68px">

                    </Skeleton>
                </Grid>




            </Grid>



        </div>
    );
}


