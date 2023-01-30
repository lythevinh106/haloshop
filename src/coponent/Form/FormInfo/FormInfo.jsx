import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import InputMUi from '../InputMui/InputMUi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from 'yup';
FormInfo.propTypes = {

};

const schema = yup.object({
    email: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`).email("email không đúng định dạng"),
    phone: yup.string().required("không được bỏ trống trường này").matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, 'Số Điện Thoại không đúng định dạng'),






    address: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`),
    name: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`),



}).required();

function FormInfo({ onSubmit = () => { }, onChangeForm = () => { } }) {


    const info = JSON.parse(localStorage.getItem("user")) || [];





    const form = useForm({
        resolver: yupResolver(schema),

        defaultValues:
        {

            email: info?.email,

            address: info?.address,
            phone: info?.phone,
            name: info?.name,
            user_id: info?.id





        }
    });;

    const handleOnSubmit = data => {


        // console.log(data);
        onSubmit(data)
    };



    return (
        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <Box sx={{


            }}>
                <Typography variant='h3' sx={{
                    padding: "5px 0px ", fontWeight: "bold", textAlign: "center", margin: "10px 0",

                    color: "#00483d"
                }}>
                    Thông Tin Của Bạn
                </Typography>

                <Box sx={{
                    width: "90%",
                    margin: "0 auto"
                }}>



                    <InputMUi

                        sx={{
                            marginTop: "10px", "input": {

                                fontSize: "18px",
                                fontSize: {
                                    xs: "12px"
                                }

                            }
                        }}
                        form={form} name="email" label="Tên Email"

                        readOnly={true}


                    />
                    <InputMUi sx={{
                        marginTop: "10px", "input": {

                            fontSize: "18px",
                            fontSize: {
                                xs: "12px"
                            }

                        }
                    }} form={form} name="name" label="Tên Của Bạn" />



                    <InputMUi sx={{
                        marginTop: "15px", "input": {

                            fontSize: "18px",
                            fontSize: {
                                xs: "12px"
                            }

                        }
                    }} type="number" form={form} name="phone" label="Số Điện Thoại" />


                    <InputMUi sx={{
                        marginTop: "15px", "textarea": {

                            fontSize: "18px",
                            fontSize: {
                                xs: "12px"
                            }

                        }
                    }} form={form} name="address" label="Địa Chỉ" multiline rows={8} />












                    <Box mt="15px" textAlign="center">
                        <Button type='submit' fullWidth variant="contained"

                            sx={{
                                backgroundColor: "#00483d",
                                "&:hover": {
                                    backgroundColor: "#00483d",
                                }
                            }}

                        >
                            Lưu


                        </Button></Box>

                    <Typography onClick={onChangeForm} sx={{
                        color: "#00483d",

                    }} variant='h5' marginTop={1}>**Thông tin trên là những thông tin nhận hàng và liên hệ của bạn</Typography>

                </Box>



            </Box>
        </form>
    );
}

export default FormInfo;