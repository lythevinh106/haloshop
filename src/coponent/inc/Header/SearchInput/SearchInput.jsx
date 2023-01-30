import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { SearchOutlined } from '@ant-design/icons';
import Button from '../../../Button/Button';

import { Popover, Spin, Tooltip } from 'antd';

import MenuResult from '../MenuResult/MenuResult';

import PopperWrapper from '../../../PopperWapper/PopperWrapper';
import Form from '../../../Form/Form';
import InputField from '../../../Form/InputField/InputField';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ProductApi from '../../../../Service/ProductApi';
import useDebounce from '../../../../Hock/useDebounce';
import { replace } from 'feather-icons';




SearchInput.propTypes = {

};

function SearchInput(props) {

    const [InputValue, setInputValue] = useState("");
    const [loadSpin, setLoadSpin] = useState(false);
    const [opentResult, setOpentResult] = useState(false);

    const [searchResult, setSearchResult] = useState([])


    const InputRef = useRef();


    const debounced = useDebounce(InputValue, 500);



    // console.log(debounced);



    useEffect(() => {


        if (debounced.trim().length <= 0) {
            // console.log("het chu")
            setOpentResult(false);

            return;
        }
        setLoadSpin(true);


        const getAllApi = (async () => {


            try {
                const response = await ProductApi.getAllProduct({
                    search: debounced,
                    limit: 5
                });
                if (response.data) {
                    let Product = response.data;



                    setOpentResult(true);
                    // console.log(Product)
                    setSearchResult(Product);
                }







            } catch (error) {
                setLoadSpin(false);
                setOpentResult(false);
                console.log("k tim thay du lieu")

            }
            setLoadSpin(false);



        })();


    }, [debounced]);

    // console.log(InputValue);
    // console.log(loadSpin)

    const handleOnChange = (value) => {

        // console.log(value)
        setInputValue(value);


    }

    let navigate = useNavigate();

    const handleMenuResultClick = (product) => {
        console.log("clock vao ket qua", InputRef)

        InputRef.current.focus();
        InputRef.current.value = product.name

        navigate(`/products/${product.id}`, replace);
    }


    const form = useForm({

        defaultValues: {
            header: '',

        },

    });

    const onSubmit = useCallback((data) => {
        console.log(data)

    }, [])

    // console.log("day la comp search header")

    return (


        // <Form>


        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="header-search" >

                <span className="header-search__input">
                    <PopperWrapper>
                        {searchResult && (
                            <Popover

                                overlayClassName='header-search__result'
                                content={() => {

                                    return (



                                        <MenuResult onClick={handleMenuResultClick} products={searchResult} />


                                    )

                                }}

                                trigger="click"
                                open={opentResult}
                            // open={open}
                            // onOpenChange={handleOpenChange}
                            >






                                <InputField
                                    ref={InputRef}
                                    placeholder='Hôm nay bạn cần tìm gì?'
                                    onClick={() => {

                                        setOpentResult(false);
                                    }}

                                    onChange={(e) => {
                                        handleOnChange(e.target.value)
                                    }}

                                    name="header"

                                    form={form}





                                />

                            </Popover>


                        )}



                    </PopperWrapper>
                </span >




                {/* <div className="header-search__btn">
                    <PopperWrapper>

                        <Button type='submit'>
                            <SearchOutlined />
                        </Button>

                    </PopperWrapper>
                </div> */}




                <div className='spin-wrapper'> <Spin spinning={loadSpin} className='header-search__spin' /></div>


            </div >
        </form>



        // </Form>


    );
}

export default memo(SearchInput);