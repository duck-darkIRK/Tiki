import { books } from '../../data.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
function DetailLeft() {
    const { id } = useParams()
    const book = books.find(items=>items.id == id)
    const [seeMore, setSeeMore] = useState(false)
    function handleSeeMore() {
        setSeeMore(!seeMore)
    }
    return <div className='container col-3' style={{ marginLeft: '0' }}>
        <div>
            <img src={book.images[0].base_url} alt={book.name} style={{ width: '100%' }} />
            <div><b>Đặc điểm nổi bật</b></div>
            <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                <img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" style={{ width: '17px', height: '17px', marginBottom: '12px' }} />
                <p>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</p>
            </div>
            <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                <img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" style={{ width: '17px', height: '17px', marginBottom: '12px' }} />
                <p>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.</p>
            </div>
            <div className='d-flex align-items-center' style={{ gap: '5px' }}>
                <img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" style={{ width: '17px', height: '17px', marginBottom: '12px' }} />
                <p>Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các quốc gia.</p>
            </div>
            <div className='d-flex align-items-center' style={{ gap: '10px' }}>
                <img src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png" alt="" style={{ width: '20px', height: '20px' }} />
                <button onClick={() => { handleSeeMore() }} style={{ backgroundColor: 'white', color: '#808089' }}>Xem thêm</button>
                <p style={{ fontSize: '16px' }}>Tóm tắt nội dung</p>
                <img src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png" alt="" style={{ marginLeft: '40px', width: '30px', height: '25px', marginTop: '5px' }} />
            </div>
            <div>{seeMore && <div>{book.short_description}</div>}</div>
        </div>
    </div>
}
export default DetailLeft