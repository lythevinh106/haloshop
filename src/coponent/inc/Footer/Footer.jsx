import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../../Image/Image';
import BackToTop from '../../BackToTop/BackToTop';
import OrderCheckButton from '../../OrderCheckButton/OrderCheckButton'

Footer.propTypes = {

};

function Footer(props) {

    const [showBtn, setShowBtn] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY)
            if (window.scrollY >= 1000) {
                setShowBtn(true)
            } else {

                setShowBtn(false)
            }
        })

    }, []);


    // console.log("footer")

    return (



        <footer >

            {showBtn && <BackToTop />}
            <OrderCheckButton />



            <div className="content">

                <div className="item-link">
                    <div className="item-title"
                    >
                        Hỗ Trợ - Dịch Vụ
                    </div>
                    <ul className='item-main'>
                        <li><a href="/mua-hang-tra-gop">Mua hàng trả góp</a></li>
                        <li><a href="/huong-dan-dat-hang">Hướng dẫn đặt hàng và thanh toán</a></li>
                        <li><a href="/order/check">Tra cứu đơn hàng</a></li>
                        <li><a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a></li>
                        <li><a href="/dat-hang/bao-hanh-mo-rong">Phạm vi, điều khoản gói bảo hành mở rộng</a></li>
                        <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
                        <li><a href="/chinh-sach-giai-quyet-khieu-nai">Chính sách giải quyết khiếu nại</a></li>
                        <li><a href="/dieu-khoan-mua-ban-hang-hoa">Điều khoản mua bán hàng hóa</a></li>
                        <li><a href="/cau-hoi-thuong-gap">Câu hỏi thường gặp</a></li>
                    </ul>

                </div>

                <div className="item-link">
                    <div className="item-title"
                    >
                        Thông Tin Liên Hệ
                    </div>
                    <ul className='item-main'>
                        <ul>
                            <li><a href="/mua-hang-online">Bán hàng Online</a></li>
                            <li><a>Chăm sóc Khách Hàng</a></li>
                            <li><a>Hỗ Trợ Kỹ thuật</a></li>
                            <li><a>Hỗ trợ Bảo hành &amp; Sửa chữa</a></li>
                            <li><a>Liên hệ khối văn phòng</a></li>
                        </ul>
                    </ul>

                </div>
                <div className="item-link">
                    <div className="item-title"
                    >
                        Hệ thống 124 siêu thị trên toàn quốc
                    </div>
                    <ul className='item-main'>

                        <li>Hệ thống 124 siêu thị trên toàn quốc</li>
                    </ul>

                </div>

                <div className="item-hotline">
                    <div className="item-title"
                    >
                        Tổng đài
                    </div>
                    <ul className='item-main'>
                        <li>1900.2091</li>
                    </ul>

                </div>

                <div className="item-payment">
                    <div className="item-title"
                    >
                        Thanh Toán
                    </div>
                    <ul className='item-main'>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-visa.png" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-master.png" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-jcb.png" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-atm.png" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-atm.png" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png" /></li>

                    </ul>

                </div>






                <div className="item-transport">

                    <div className="item-title">
                        Hình Thức Vận Chuyển
                    </div>


                    <ul className="item-main">

                        <li><Image src="https://hoanghamobile.com/Content/web/img/nhattin.jpg" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/vnpost.jpg" /></li>
                        <li><Image src="https://hoanghamobile.com/Content/web/img/logo-bct.png" /></li>

                    </ul>

                </div>
            </div>

            <div className="info">
                <p>© 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:  0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay đổi ngày 24/11/2022)</p>
                <p>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</p>
                <p>Địa chỉ: 89 Tam Trinh, P. Mai Động, Q. Hoàng Mai, Thành phố Hà Nội. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: Hoàng Ngọc Chiến. </p>

            </div>

        </footer >
    );
}

export default memo(Footer);