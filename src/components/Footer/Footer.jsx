function Footer() {
    return <div style={{ marginTop:'20px', borderTop:'1px solid #808089', padding:'10px'}}>
        <div className="container d-flex" style={{gap:'15px', justifyContent:'center'}}>
            <div className="" style={{fontSize:'12px', color: '#808089'}}>
                <b style={{color:'black'}}>Hỗ trợ khách hàng</b>
                <p>Hotline:1900-6035</p>
                <p>Các câu hỏi thường gặp</p>
                <p>Gửi yêu cầu hỗ trợ</p>
                <p>Hướng dẫn đặt hàng</p>
                <p>Phương thức vận chuyển</p>
                <p>Chính sách đổi trả</p>
                <p>Hướng dẫn trả góp</p>
                <p>Chính sách hàng nhập khẩu</p>
                <p>Hỗ trợ khách hàng hotro@tiki.vn</p>
                <p>Báo lỗi bảo mật security@tiki.vn</p>
            </div>
            <div className="" style={{fontSize:'12px', color: '#808089'}}>
                <b style={{color:'black'}}>Về Tiki</b>
                <p>Giới thiệu Tiki</p>
                <p>Tiki Blog</p>
                <p>Tuyển dụng</p>
                <p>Chính sách bảo mật thanh toán</p>
                <p>Chính sách bảo mật thông tin cá nhân</p>
                <p>Chính sách giải quyết khiếu nại</p>
                <p>Điều khoản sử dụng</p>
                <p>Giới thiệu Tiki Xu</p>
                <p>Gói hội viên Vip</p>
                <p>Tiếp thị liên kết cùng Tiki</p>
                <p>Bán hàng doanh nghiệp</p>
                <p>Điều kiện vận chuyển</p>
            </div>
            <div className="" style={{fontSize:'12px', color: '#808089'}}>
                <b style={{color:'black'}}>Hợp tác liên kết</b>
                <p>Quy chế hoạt động Sàn GDTMĐT</p>
                <p>Bán hàng cùng Tiki</p>
                <b style={{color:'black'}}>Chứng nhận bởi</b>
                <br />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" alt="" />
            </div>
            <div className="" style={{fontSize:'12px'}}>
                <b style={{color:'black'}}>Phương thức thanh toán</b>
                <br />
                <br />
                <b style={{color:'black'}}>Dịch vụ giao hàng</b>
            </div>
            <div className="" style={{fontSize:'12px'}}>
                <b style={{color:'black'}}>Kết nối với chúng tôi</b>
                <div className="d-flex" style={{gap:'3px'}}>
                    <a href=""><img style={{width:'25px', height:'25px'}} src="data:image/jpeg;base64,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" alt="" /></a>
                    <a href=""><img style={{width:'25px', height:'25px'}} src="https://www.bing.com/th?id=OIP.o8S06XUOpjp0eV-9ZvZThQHaEI&w=182&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" /></a>
                    <a href=""><img style={{width:'25px', height:'25px'}} src="https://th.bing.com/th?id=OIP.Y2vQKjDkRQ4Bpz7hZvJaOQHaHB&w=256&h=243&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" /></a>
                </div>
                <br />
                <b style={{color:'black'}}>Dịch vụ giao hàng</b>
            </div>
    </div>
</div>
}
 
export default Footer;