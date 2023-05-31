import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import ProductInfoSlider from './ProductInfoSlider/ProductInfoSlider';
import ProductInfoCenter from './ProductInfoCenter/ProductInfoCenter';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import cln from "classnames"
import ApiProduct from '../../ApiService/ApiProduct';
import SkeletonInfoCart from '../SkeletonComp/SkeletonInfoCart';
import SkeletonImageProduct from '../SkeletonComp/SkeletonImageProduct';
import Comment from '../Comment/Comment';
import FormComment from '../Form/FormComment/FormComment';
import ProductApi from '../../Service/ProductApi';
import { useDispatch } from 'react-redux';
import { activeToast } from '../../features/progress/progressSlice';
ProductInfo.propTypes = {

};

function ProductInfo({ product, productImages }) {



    const localUser = localStorage.getItem("user") || null;

    const [showReadMore, setShowReadMore] = useState(false);

    const [comments, setComments] = useState([]);


    useEffect(() => {
        (async () => {
            try {


                const response = await ProductApi.showComment(product.id
                );



                if (response.original.code == 200) {
                    setComments(response.original.data);
                }


            } catch (error) {

            }
        })();

    }, [product.id])

    const dispatch = useDispatch();


    const handleDesOnClick = () => {

        setShowReadMore(!showReadMore);
    }



    const handleSubmitComment = async (data, commentId = 0) => {



        if (localUser) {
            try {


                const response = await ProductApi.addComment(product.id, {
                    userID: JSON.parse(localUser).id,
                    commentText: data.comment,
                    parentCommentID: commentId
                });

                console.log(response);

                if (response.original.code == 200) {
                    dispatch(activeToast({
                        status: "success",
                        message: "Thêm Bình Luận Thành Công!!!",
                        setting: {
                            autoClose: 2000,
                        },

                        style: {
                            fontSize: 10,
                            fontWeight: "bold",
                            color: "#00483d"

                        }


                    }));

                    setComments((prev) => {
                        return [response.original.data,
                        ...prev

                        ]
                    });
                }


            } catch (error) {
                dispatch(activeToast({
                    status: "error",
                    message: "Da xảy ra lỗi",
                    setting: {
                        autoClose: 2000,
                    },

                    style: {
                        fontSize: 10,
                        fontWeight: "bold",
                        color: "#00483d"

                    }


                }));
            }

        }

    }
    // console.log("day la lay out cua product info");

    return (
        <div className='product-info-wrapper'>

            <div className="product__title">
                {product.name}
            </div>
            <div className="product__main">




                {
                    !product.image ? <SkeletonImageProduct /> : <div className="product__main__slider">

                        <ProductInfoSlider images={productImages} />




                    </div>
                }








                <div className="product__main__center">
                    {
                        !product.name ? <SkeletonInfoCart /> : <ProductInfoCenter


                            product={product}



                        />
                    }



                </div>
            </div>



            <div className="product__des-wrapper">
                <PopperWrapper>
                    <div className="product__des">




                        <div className={cln("product__des__content", { active: showReadMore })}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        >


                        </div>

                        <div className={cln("product__des__btn", {
                            active: showReadMore
                        })}

                            onClick={handleDesOnClick}>
                            <span>  {showReadMore ?

                                "Thu Gọn" : "Xem Thêm"}</span>


                        </div>
                    </div>
                </PopperWrapper>
            </div >

            <div className="product__comment-wrapper" >

                <PopperWrapper >






                    <div className='product__comment' >
                        <div className="product__comment__title">
                            Bình luận về {product?.name}
                        </div>




                        {localUser ? <div className="product__comment__form">
                            <FormComment onSubmit={handleSubmitComment}></FormComment>
                        </div> : <div className='product__comment__alert'>
                            Hãy Đăng Nhập Để Sử Dụng Tính Năng Bình Luận
                        </div>}




                        <div className='product__comment__main'>
                            <Comment comments={comments} onSubmitRepLy={handleSubmitComment} />
                        </div>
                    </div>


                </PopperWrapper>
            </div>


        </div >
    );
}

export default ProductInfo;