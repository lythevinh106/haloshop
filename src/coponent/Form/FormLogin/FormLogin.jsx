import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import InputMUi from '../InputMui/InputMUi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from 'yup';
import AuthApi from '../../../Service/Auth';
FormLogin.propTypes = {

};

const schema = yup.object({
    email: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`).email("email không đúng định dạng"),

    password: string().required("trường này không được bỏ trống").min(6, `Tối thiểu Có 6 kí tự`)



}).required();

function FormLogin({ onSubmit, onChangeForm = () => { } }) {





    const form = useForm({
        resolver: yupResolver(schema),

        defaultValues:
        {

            email: "",
            password: "",






        }
    });;

    const handleOnSubmit = data => {



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
                    Đăng Nhập
                </Typography>

                <Box sx={{
                    width: "90%",
                    margin: "0 auto"
                }}>




                    <InputMUi sx={{
                        marginTop: "10px",
                        "input": {

                            fontSize: "18px"

                        }

                    }} form={form} name="email" label="Tên Email" />


                    <InputMUi sx={{
                        marginTop: "15px", "input": {

                            fontSize: "18px"

                        }
                    }} type="password" form={form} name="password" label="password" />














                    <Box mt="15px" textAlign="center">
                        <Button type='submit' fullWidth variant="contained"

                            sx={{
                                backgroundColor: "#00483d",
                                "&:hover": {
                                    backgroundColor: "#00483d",
                                }
                            }}

                        >
                            Đăng Nhập


                        </Button></Box>

                    {/* <Button onClick={async () => {
                        const response = await AuthApi.showCartAuth(33);
                        console.log(response);

                    }}>goi user sua khi dang nhap</Button> */}

                    <Typography onClick={onChangeForm} sx={{
                        color: "#00483d",
                        cursor: "pointer"
                    }} variant='h5' marginTop={1}>Bạn Chưa Có Tài Khoản?</Typography>

                </Box>



            </Box>
        </form>
    );
}

export default FormLogin;