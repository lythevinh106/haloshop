import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


function useDebounce(value, delay) {

    const [valueDebounce, setValueDebounce] = useState(value);
    useEffect(() => {

        const timeID = setTimeout(() => {
            setValueDebounce(value);
            // console.log("chay ham time out")

        }, delay)

        return () => {

            // console.log("chay ham clear")
            clearTimeout(timeID)


        };

    }, [value])



    return valueDebounce;
}

export default useDebounce;