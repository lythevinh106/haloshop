import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Product from '../../coponent/Product/Product';
import PopperWrapper from '../../coponent/PopperWapper/PopperWrapper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
Category.propTypes = {

};



const filterItem = [

    {
        name: "Giá",
        id: 1,
        filterWith:
            [
                {
                    name: "dưới 500 nghìn ",
                    from: 0,
                    to: 500000,
                    id: 1,
                    idParent: 1
                },
                {
                    name: "từ 500 nghìn-1 triệu",
                    from: 500000,
                    to: 1000000,
                    id: 2,
                    idParent: 1
                },
                {
                    name: "1-2 triệu",
                    from: 1000000,
                    to: 2000000,
                    id: 3,
                    idParent: 1
                }
                ,
                {
                    name: "2-3 triệu",
                    from: 2000000,
                    to: 3000000,
                    id: 4
                    ,
                    idParent: 1
                },
                {
                    name: "từ 3-4 triệu",
                    from: 3000000,
                    to: 4000000,
                    id: 5,



                    idParent: 1
                },
                {
                    name: "từ 4-5 triệu",
                    from: 4000000,
                    to: 5000000,
                    id: 6
                    ,
                    idParent: 1
                },
                {
                    name: "trên 5 triệu",
                    id: 7
                    ,
                    from: 5000000,

                    to: 1000000000000,
                    idParent: 1
                },

            ]



    },

    {

        name: "Sắp xếp",
        id: 2,
        filterWith:
            [
                {
                    name: "Thấp Tới Cao",
                    id: 1,
                    sort: "desc"
                    ,
                    idParent: 2
                },
                {
                    name: "Cao Tới Thấp",
                    sort: "asc",
                    id: 2
                    ,
                    idParent: 2
                },


            ]



    }
]

function Category(props) {

    const [resultItem, setResultItem] = useState([]);

    let [searchParams, setSearchParams] = useSearchParams();

    let location = useLocation();
    const linkParam = useParams();






    const handleOnHoverItem = (id) => {


        const filter = filterItem.find((item) => {

            return item.id === id

        })

        setResultItem(filter.filterWith);
    }


    const handleOnMouseLeave = () => {
        setResultItem([]);
    }


    const handleItemResultClick = (from, to, sort) => {

        if (to) {

            setSearchParams({
                ...queryString.parse(location.search),
                from: from,
                to: to
            });
        } else {
            setSearchParams({
                ...queryString.parse(location.search),
                from: from,

            });
        }


        if (sort) {
            setSearchParams({
                ...queryString.parse(location.search),
                sort: sort,

            });

        }


    }

    return (
        <div className='category-wrapper' onMouseLeave={() => {
            handleOnMouseLeave()
        }}>

            <div className="category-filter"
            >
                <PopperWrapper>
                    <div className="category-filter__main">
                        <div className="header-filter">
                            Lọc Danh Sách:
                        </div>
                        <div className='filter'>

                            {filterItem.map((item) => {
                                return (
                                    <div key={item.id} className="filter-item"

                                        onMouseEnter={() => handleOnHoverItem(item.id)}>
                                        <span className="filter-item__name">
                                            {item.name}
                                        </span>

                                        <span className="filter-item__icon">
                                            < ExpandMoreIcon />
                                        </span>


                                    </div>)

                            })}



                            {/* <div className="filter-item">
                                <span className="filter-item-name">
                                    Giá
                                </span>

                                <span className="filter-item-icon">
                                    < ExpandMoreIcon />
                                </span>


                            </div> */}
                        </div>



                        <div className="category-filter__result">
                            <PopperWrapper bigShadow>
                                <div className="filter-result-main">
                                    {resultItem && resultItem.map((item) => {
                                        return (
                                            <div key={item.id} className="result-item"

                                                onClick={() => {

                                                    handleItemResultClick(item?.from, item?.to, item?.sort)
                                                }}
                                                onMouseEnter={() => handleOnHoverItem(item.idParent)}>


                                                {item.name}
                                            </div>
                                        )


                                    })}
                                </div>
                            </PopperWrapper>
                        </div>
                    </div>
                </PopperWrapper>

            </div >
            <div className="category-product">
                <Product categorySlug={linkParam.category} headerTitle="smartTV" isPagination limit={10} />
            </div>




        </div >
    );
}

export default Category;