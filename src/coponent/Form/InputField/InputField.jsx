import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import cln from "classnames";


const InputField = forwardRef((
    { Comp = "input", bgGrey = false, type = "text", placeholder = "", value,
        onChange = () => { }, form = undefined, name = "", error = ""

        , defaultValue, ...propOther
    }, ref) => {
    // const { register, handleSubmit, watch, formState: { errors } } = form
    let refProp = {};
    if (ref) {
        refProp = {
            ref
        }

    }
    const classes = cln("input-wrapper", {
        error,
        "input--grey": bgGrey

    })

    const handleOnchange = (e) => {
        onChange(e);
    }


    return (



        <div className={classes}>

            <Comp
                {...form?.register(name)}
                type={type}

                // defaultValue={defaultValue}
                value={value}
                {...refProp}
                placeholder={placeholder}
                onChange={handleOnchange}
                {...propOther}

            />
            {error && (
                <div className="input-error">
                    {error}
                </div>
            )}

        </div >
    );
});

export default InputField;