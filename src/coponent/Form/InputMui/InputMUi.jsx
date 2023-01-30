import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';


function InputMUi({ form, name, sx, label, type = "text", control, readOnly = false,
    defaultValue = "", value, onChange = () => { }, ...other }) {
    const { register, handleSubmit, watch, getFieldState, formState: { errors } } = form


    return (
        <>



            <TextField variant="outlined" fullWidth
                error={errors[name] ? true : false}
                type={type}
                size="medium"
                {...register(name)}
                InputProps={{
                    readOnly: readOnly,
                }}

                value={value}
                sx={sx}
                helperText={errors[name]?.message}
                label={label}
                onChange={(e) => onChange(e)}
                {...other}
            />






        </>
    );
}

export default InputMUi;