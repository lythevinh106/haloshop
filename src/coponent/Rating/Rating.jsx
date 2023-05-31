import React from 'react';
import PropTypes from 'prop-types';
import { Box, Rating, Typography } from '@mui/material';




function MyRating({ title = "", value = 0, onChange = () => {

}, ...propOther


}) {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
                'marginTop': 1,
                'textAlign': "center",


            }}
        >


            {title && <Typography variant='h4' sx={{
                fontWeight: 500

            }} component="legend">{title}</Typography>}


            <Rating
                sx={{

                    marginTop: 1,
                    marginBottom: 1,

                }}

                value={value}
                onChange={onChange}
                name="size-large"
                size="large"
                {...propOther}
            />



        </Box>
    );
}

export default MyRating;