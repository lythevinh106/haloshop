import React, { memo } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import InputField from '../Form/InputField/InputField';


import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '../Button/Button'
FormPayment.propTypes = {

};

function FormPayment({ onSubmit }) {


    // yup.setLocale(
    //     {

    //         string: {
    //             required: ' ${path} không được bỏ trống',
    //         }
    //     }
    // )

    const schema = yup.object({
        email: yup.string().email("vui lòng nhập đúng định dạng email").required("không được bỏ trống trường này"),
        name: yup.string().required("không được bỏ trống trường này"),
        phone: yup.string().required("không được bỏ trống trường này").matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, 'Số Điện Thoại không đúng định dạng'),
        address: yup.string().min(6, "địa chỉ quá ngắn").required("không được bỏ trống trường này"),
        note: yup.string().min(6, "ghi chú quá ngắn").required("không được bỏ trống trường này"),

    }).required();






    const form = useForm({

        defaultValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            note: ''



        },
        resolver: yupResolver(schema)

    });

    const { register, handleSubmit, watch, formState: { errors } } = form


    const handleOnSubmit = (data) => {


        onSubmit(data, form)

        // notify();

    }


    // console.log("day la form payment")

    return (
        <div className='form-payment-wrapper'>
            <form
                onSubmit={form.handleSubmit(handleOnSubmit)}


                className="form-payment-main">
                <div className="form-row w-12">
                    <div className="form-label">
                        Họ Và Tên
                    </div>
                    <div className="form-input">

                        <InputField bgGrey

                            name="name"
                            placeholder="Họ Và Tên" error={errors?.name?.message}
                            form={form}
                        />

                    </div>

                </div>

                <div className="form-row w-6">
                    <div className="form-label">
                        Điện Thoại
                    </div>
                    <div className="form-input ">

                        <InputField bgGrey
                            name="phone"
                            error={errors?.phone?.message}
                            form={form}
                            placeholder="Điện Thoại"
                        />

                    </div>

                </div>



                <div className="form-row w-6">
                    <div className="form-label">
                        Email
                    </div>
                    <div className="form-input ">

                        <InputField bgGrey

                            name="email"
                            placeholder="Email" error={errors?.email?.message}
                            form={form}

                        />

                    </div>

                </div>


                <div className="form-row w-12">
                    <div className="form-label">
                        Địa Chỉ Nhận Hàng
                    </div>
                    <div className="form-input ">

                        <InputField bgGrey
                            name="address"
                            error={errors?.address?.message}
                            form={form}

                            Comp="textarea"
                            placeholder="Địa Chỉ"
                        />

                    </div>

                </div>

                <div className="form-row w-12">
                    <div className="form-label">
                        Ghi CHú
                    </div>
                    <div className="form-input ">

                        <InputField bgGrey
                            name="note"
                            error={errors?.note?.message}
                            form={form}
                            Comp="textarea"
                            placeholder="Ghi Chú"
                        />

                    </div>

                </div>

                <div className="product-main__btn">

                    <Button type='submit' >  Tiến Hành Đặt Hàng</Button>


                </div>
            </form >
        </div >
    );
}

export default memo(FormPayment);