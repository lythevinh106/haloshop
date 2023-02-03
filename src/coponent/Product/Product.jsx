import React, { useEffect, useState, useRef, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

import ProductItem from './ProductItem/ProductItem';
import PopperWrapper from '../PopperWapper/PopperWrapper';
import ApiProduct from '../../ApiService/ApiProduct';
import Button from '../Button/Button';
import { baseUrl } from '../../constanst/UrlContanst';
import TitleCart from '../TitleCart/TitleCart';
import ProgressHeader from '../../ProgressHeader/ProgressHeader';
import { useDispatch } from 'react-redux';
import { activeProgress } from '../../features/progress/progressSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import ProductApi from "./../../Service/ProductApi.js"
import { useParams, useSearchParams } from 'react-router-dom';
import SkeletonProduct from '../SkeletonComp/SkeletonProduct';

Product.propTypes = {

};

function Product({ categorySlug = null, headerTitle, isPagination = false, limit = 15, limitLoad = 15 }) {

    const { category } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();


    let [isLoading, setIsLoading] = useState(false);


    // console.log(searchParams.get("from"));
    // console.log(searchParams.get("to"));

    const filter = {

    }

    const [offSetHeight, setOffSetHeight] = useState(window.scrollY)
    const [products, setProducts] = useState([]);
    const [infoPage, setInfoPage] = useState({
        totalPage: 1,
        currentPage: 1,

    });

    const dispatch = useDispatch();


    const [loadMore, SetLoadMore] = useState({
        limit: category != undefined ? 15 : 30,
        page: 1



    });


    const [isScroll, setIsScroll] = useState(false);
    // useEffect(() => {

    //     const handleScroll = () => {


    //         setOffSetHeight(window.scrollY);


    //     }

    //     window.addEventListener("scroll", handleScroll);


    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // }, [])




    let dem = useRef(0);

    useEffect(() => {
        setIsLoading(true);

        if (products.length < 0) {
            return
        }
        dispatch(activeProgress(true));

        try {
            const getAllProduct = (async () => {


                const response = categorySlug == null ?
                    await ProductApi.getAllProduct(loadMore) :
                    await ProductApi.getAllProduct({
                        ...loadMore,
                        limit: 10,
                        slug_cat: categorySlug,
                        from: searchParams.get("from") || 0,
                        to: searchParams.get("to") || 100000000000000,
                        sort: searchParams.get("sort") || "asc"
                    })


                    ;

                setProducts(response.data);
                setIsLoading(false);
                setInfoPage({
                    currentPage: response.current_page,
                    totalPage: response.last_page,
                });
                // console.log("ham chinh")
                if (dem.current > 0) {

                    setIsScroll(true);
                }
                setTimeout(() => {
                    dispatch(activeProgress(false));
                }, 400)

            })();
        } catch (error) {

        }



        return () => {

            // setIsScroll(true);
            dem.current++;

        }




    }, [loadMore, categorySlug, category, searchParams]);

    // console.log("dât la render của load moare")
    // useEffect(() => {

    //     if (isScroll === false) return;


    //     // console.log("day la scroll")
    //     window.scrollTo({

    //         top: (offSetHeight + 800),
    //         behavior: "smooth"
    //     })
    //     setIsScroll(false)



    // }, [isScroll])


    // console.log("daya la component product-wrapper of item")




    const handleLoadMoreClick = () => {


        SetLoadMore((prev) => {

            return {
                ...prev,
                limit: prev.limit + limitLoad
            }
        })


    }
    const handlePaginationChange = (event, value) => {

        SetLoadMore((prev) => {
            return {
                page: value
            }
        })

    }




    return (


        <div className="product-wrapper">

            <div className="product-header">


                <TitleCart title={headerTitle} btnOrange />
            </div>
            {isLoading ? <SkeletonProduct /> :
                <div className='product-main'>


                    {products.length > 0 ?

                        products.map((product, index) => {

                            const productAtr = {
                                image: product.image,
                                title: product.name,
                                newPrice: product.sale_price,
                                oldPrice: product.origin_price,
                                id: product.id

                            }
                            return (


                                <ProductItem key={product.id} {...productAtr} />
                            )
                        }) : <h3 className='not-found'>Không tìm Thấy Sản Phẩm Nào</h3>

                    }




                </div >
            }



            {
                isPagination == false ? <div className="product__load-more">
                    <Button btnWhite onClick={handleLoadMoreClick}>Xem thêm </Button>

                </div> :
                    <span className='product_pagination'> <Stack spacing={2}>
                        {/* {console.log(products)} */}
                        <Pagination page={infoPage?.currentPage} count={infoPage?.totalPage} defaultPage={products.last_page}
                            color="primary" size='large' onChange={handlePaginationChange} />

                    </Stack>
                    </span>





            }


        </div>

    );
}

export default memo(Product);