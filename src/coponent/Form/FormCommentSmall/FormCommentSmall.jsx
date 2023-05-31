import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import InputMUi from '../InputMui/InputMUi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from 'yup';




const schema = yup.object({
    comment: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`),

}).required();

function FormCommentSmall({ onSubmit = () => { }, onChangeForm = () => { }, }) {



    const form = useForm({
        resolver: yupResolver(schema),

        defaultValues:
        {

            comment: "",




        }
    });;

    const handleOnSubmit = data => {



        onSubmit(data)

        form.reset();
        // console.log(data);
    };


    return (



        <form onSubmit={form.handleSubmit(handleOnSubmit)}>
            <Box sx={{

            }}>


                <Box sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "end"



                }}>


                    <InputMUi sx={{
                        marginTop: "10px",
                        width: "100%",
                        "input": {

                            fontSize: "13px"


                        }


                    }} form={form} name="comment"
                        fullWidth={false}
                        label="Nội Dung Bình Luận"
                        size="small"
                        variant="standard"
                    />



                    <Box textAlign="center" width="30%">
                        <Button type='submit'

                            variant="contained"
                            width="30%"

                            sx={{
                                backgroundColor: "#00483d",
                                "&:hover": {
                                    backgroundColor: "#00483d",
                                }
                            }}

                        >
                            Trả Lời


                        </Button></Box>



                </Box>



            </Box>
        </form >
    );
}

export default FormCommentSmall;