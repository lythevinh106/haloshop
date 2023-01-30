import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import "./style.scss";
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import OrderApi from '../../Service/OrderApi';
import { useDispatch } from 'react-redux';
import { activeProgress } from '../../features/progress/progressSlice';
import { status_content } from '../../until/status_content';
import FormatPrice from '../../until/FormatPrice/FormatPrice';
// import Product from '../../coponent/Product/Product';

OrderCheck.propTypes = {

};




const bigBanner = [


    {
        id: 1,
        image: "https://cdn.hoanghamobile.com/i/home/Uploads/2022/12/08/1200x200-hotsale-galaxy-a-series-01-1.jpg"
    },




]











function OrderCheck(props) {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const [listOrder, setListOrder] = useState();
    const [error, setError] = useState(false);


    const onSubmit = async data => {
        if (data.token.trim().length <= 0) {
            return;
        }

        dispatch(activeProgress(true));

        try {

            const response = await OrderApi.checkOrder(data.token);
            console.log(response);
            if (response.original.status == 201) {

                setError(false);
                const resultUpdate = { ...response.original.data[0] };

                const infoProducts = resultUpdate.products;
                const infoOrderItems = resultUpdate.order_items;
                let arrResult = [];


                arrResult = infoProducts.map((productItem, indexProduct) => {


                    for (let i = 0; i < infoOrderItems.length; i++) {
                        if (infoOrderItems[i].product_id == productItem.id) {
                            // infoProducts[indexProduct].quantity = order_item.quantity

                            return {
                                ...productItem,
                                quantity: infoOrderItems[i].quantity,
                                status: resultUpdate.status
                            }
                        }
                    }



                });

                setListOrder(arrResult);
                dispatch(activeProgress(false));
            }
            else if (response.original.status == 400) {
                console.log(response);
                dispatch(activeProgress(false));
                setError(true);
            }


        } catch (error) {
            dispatch(activeProgress(false));
        }

    };




    return (
        <>
            <form className='order-wrapper' onSubmit={handleSubmit(onSubmit)}>



                <Box className="order__main">
                    <div className="order__title">
                        Kiểm Tra Đơn Hàng Của Bạn
                    </div>

                    <Box className='order__input'>
                        <TextField {...register("token")} label="Mã Đơn" error={error} size='medium'
                            fullWidth
                            helperText={error && "Mã Vận Đơn Không Tồn Tại Trên Hệ Thống"} sx={{
                                borderRadius: "10px"
                            }} />
                    </Box>
                    <Box className='order__btn'>
                        <Button type='submit' variant="contained" fullWidth sx={{
                            backgroundColor: "#00483d",
                            marginTop: "15px"
                        }}>Kiểm Tra</Button>
                    </Box>


                </Box>



            </form>

            <div className="order--result">
                <div className="order--result__title">
                    Kết Quả Tìm Kiếm Được
                </div>
                <div className="order--result__main">
                    {listOrder && listOrder.map((order, index) => {

                        return (
                            <div key={index} className="result_item">
                                <div className="item__img">
                                    <img src={order.image} alt="" />
                                </div>
                                <div className="item__name">
                                    {order.name}
                                </div>
                                <div className="item__price">
                                    giá:<span>   {FormatPrice(order.sale_price)}</span>
                                </div>
                                <div className="item__quantity">
                                    số lượng:<span>{order.quantity}</span>
                                </div>

                                <div className="item__status">
                                    trạng thái:<span>{status_content(order.status)}</span>
                                </div>
                            </div>)

                    })}
                </div>
            </div>


            {
                // listOrder && (<div className="order--result">
                //     <div className="order--result__title">
                //         Kết Quả Tìm Kiếm Được
                //     </div>
                //     <div className="order--result__main">
                //         <div className="result_item">
                //             <div className="item__img">
                //                 <img src="https://s3.ap-southeast-1.amazonaws.com/testlaravelaws/public/rJ1673152905reno6-z%20%281%29.png" alt="" />
                //             </div>
                //             <div className="item__name">
                //                 ten san pham 1
                //             </div>
                //             <div className="item__price">
                //                 giá:<span>56333333</span>
                //             </div>
                //             <div className="item__quantity">
                //                 số lượng:<span>5</span>
                //             </div>

                //             <div className="item__status">
                //                 trạng thái:<span>đang vận chuyển</span>
                //             </div>
                //         </div>

                //     </div>
                // </div>)
            }


        </>
    );
}

export default OrderCheck;