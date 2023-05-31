import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import InputMUi from '../InputMui/InputMUi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from 'yup';
FormComment.propTypes = {

};



const schema = yup.object({
    comment: string().required("trường này không được bỏ trống").min(3, `Tối thiểu Có 3 kí tự`),

}).required();

function FormComment({ onSubmit = () => { }, onChangeForm = () => { }, }) {



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
                    width: "90%",
                    margin: "0 auto"
                }}>


                    <InputMUi sx={{
                        marginTop: "10px",
                        "input": {

                            fontSize: "18px"

                        }

                    }} multiline rows={5} form={form} name="comment" label="Nội Dung Bình Luận" />







                    <Box mt="15px" textAlign="center">
                        <Button type='submit' variant="contained"

                            sx={{
                                backgroundColor: "#00483d",
                                "&:hover": {
                                    backgroundColor: "#00483d",
                                }
                            }}

                        >
                            Gửi Bình Luận


                        </Button></Box>

                 

                </Box>



            </Box>
        </form>
    );
}

export default FormComment;