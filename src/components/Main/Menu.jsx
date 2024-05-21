import { useMediaQuery } from "react-responsive"
import App from "../../App"
function Menu(props){
        return <div>
        <div>
            <h5>Danh mục sản phẩm</h5>
            <a style={{textDecoration:'none', color:'black'}} href=""><p>English Book</p></a>
            <a href={'/VnBook'} style={{textDecoration:'none', color:'black'}}><p>Sách Tiếng Việt</p></a>
            <a style={{textDecoration:'none', color:'black'}} href=""><p>Văn phòng phẩm</p></a>
            <a style={{textDecoration:'none', color:'black'}} href=""><p>Quà lưu niệm</p></a>
        </div>
        <hr />
        <div className="">
            <h5>Nhà cung cấp </h5>
            <input  type="checkbox" id="" name="" style={{marginRight:'5px', border:'1px solid #DDDDE3',borderRadius:'15px'}}/>
            <label htmlFor="">Nhà sách Fahasa</label>
            <br />
            <input type="checkbox" style={{marginRight:'5px', border:'1px solid #DDDDE3',borderRadius:'15px'}} />
            <label htmlFor="">Bamboo Books</label>
            <br />
            <input type="checkbox" name="" id="" style={{marginRight:'5px', border:'1px solid #DDDDE3',borderRadius:'15px'}} />
            <label htmlFor="">Times Books</label>
            <br />
            <input type="checkbox" style={{marginRight:'5px', border:'1px solid #DDDDE3',borderRadius:'15px'}} />
            <label htmlFor="">Nhà sách trẻ online</label>
            <br />
            <input type="checkbox" style={{marginRight:'5px', border:'1px solid #DDDDE3',borderRadius:'15px'}} />
            <label htmlFor="">VBooks</label>
            <span></span>
        </div>
        <hr />
        <div>
            <h5>Đánh giá</h5>
           
        </div>
    </div>
}
export default Menu