import { useState } from 'react';
import { books } from '../../data.json';
import { useParams } from 'react-router-dom'
function DetailRight() {
    const { id } = useParams()
    const book = books.find(item => item.id == id)
    const [soLuong, setSoLuong] = useState(1);
    function handleUp (){
        setSoLuong( soLuong + 1)
    }
    function handleDown(){
        setSoLuong(soLuong - 1)
    }
    function handleBtnBuy(){
        alert(`Bạn đã mua:${soLuong} sản phẩm`)
    }
    function handleBtnAdd(){
        alert(`Bạn đã thêm vào giỏ hàng ${soLuong} sản phẩm` )
    }
    return <div>    
        <b>Số lượng</b>
        <div>
            <div className='d-flex' style={{gap:'3px'}}>
                <button onClick={()=>handleDown()} className="spin-button spin-button-down">-</button>
                <input type="text" value={soLuong} min="1" max="100" style={{width:'50px',textAlign:'center',borderRadius:'5px',height:'45px',border: '1px solid #A6A6B0'}}/>
                <button onClick={()=>handleUp()} className="spin-button spin-button-up">+</button>
            </div>
        </div>
        <b>Tạm tính </b>
        <br />
        <b style={{fontSize:'25px'}}>{book.list_price * soLuong}. VNĐ</b>
        <br />
        <button onClick={()=>handleBtnBuy()} style={{background:'red', color:'white', width:'100%', marginBottom:'5px'}}>Mua ngay</button>
        <button onClick={()=>handleBtnAdd()} style={{color:'#0A68FF', border:'1px solid #0A68FF', background:'white', width:'100%', marginBottom:'5px'}}>Thêm vào giỏ</button>
        <button style={{color:'#0A68FF', border:'1px solid #0A68FF', background:'white', width:'100%'}}>Mua trước trả sau</button>
    </div>
}

export default DetailRight;