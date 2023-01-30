import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import InputMUi from '../InputMui/InputMUi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from 'yup';
FormRegister.propTypes = {

};

const schema = yup.object({
    email: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`).email("email không đúng định dạng"),
    phone: yup.string().required("không được bỏ trống trường này").matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, 'Số Điện Thoại không đúng định dạng'),


    password: string().required("trường này không được bỏ trống").min(6, `Tối thiểu Có 6 kí tự`)


    ,
    rePassword: string().required("trường này không được bỏ trống").min(6, `Tối thiểu Có 6 kí tự`)
        .test(`compare with password ${ref("origin_price")}`, "Mật Khẩu Nhập Lại Không Khớp",
            (value, context) => {
                if (value === context.parent.password) {
                    return true
                }
            })
    ,



    address: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`),
    name: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`),



}).required();

function FormRegister({ onSubmit = () => { }, onChangeForm = () => { } }) {





    const form = useForm({
        resolver: yupResolver(schema),

        defaultValues:
        {

            email: "",
            password: "",
            rePassword: "",
            address: "",
            phone: "",





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
                    Đăng Kí Tài Khoản
                </Typography>

                <Box sx={{
                    width: "90%",
                    margin: "0 auto"
                }}>



                    <InputMUi sx={{
                        marginTop: "10px", "input": {

                            fontSize: "18px",
                            fontSize: {
                                xs: "12px"
                            }


                        },




                    }} form={form} name="email" label="Tên Email" />
                    <InputMUi sx={{
                        marginTop: "10px", "input": {

                            fontSize: "18px"
                            ,
                            fontSize: {
                                xs: "12px"
                            }

                        },

                    }} form={form} name="name" label="Tên Của Bạn" />


                    <InputMUi sx={{
                        marginTop: "15px", "input": {

                            fontSize: "18px"
                            ,
                            fontSize: {
                                xs: "12px"
                            }

                        },

                    }} type="password" form={form} name="password" label="password" />
                    <InputMUi sx={{
                        marginTop: "15px", "input": {

                            fontSize: "18px"
                            ,
                            fontSize: {
                                xs: "12px"
                            }

                        },

                    }} type="password" form={form} name="rePassword" label="nhập lại password" />
                    <InputMUi sx={{
                        marginTop: "15px", "input": {

                            fontSize: "18px"
                            ,
                            fontSize: {
                                xs: "12px"
                            }

                        },


                    }} type="number" form={form} name="phone" label="Số Điện Thoại" />


                    <InputMUi sx={{
                        marginTop: "15px", "textarea": {

                            fontSize: "18px"
                            ,
                            fontSize: {
                                xs: "12px"
                            }

                        },

                    }} form={form} name="address" label="Địa Chỉ" multiline rows={4} />












                    <Box mt="15px" textAlign="center">
                        <Button type='submit' fullWidth variant="contained"

                            sx={{
                                backgroundColor: "#00483d",
                                "&:hover": {
                                    backgroundColor: "#00483d",
                                }
                            }}

                        >
                            Đăng Kí


                        </Button></Box>

                    <Typography onClick={onChangeForm} sx={{
                        color: "#00483d",
                        cursor: "pointer"
                    }} variant='h5' marginTop={1}>Bạn Đã Có Tài Khoản?</Typography>

                </Box>



            </Box>
        </form>
    );
}

export default FormRegister;