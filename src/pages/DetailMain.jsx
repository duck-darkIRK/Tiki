import { books } from '../../data.json'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
function DetailMain() {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    // const book = books.find(item => item.id == id)
    
    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
        .then(res => res.json())
        .then(book => {
            console.log(book);
            setBook(book);
        })
    }, [])

    if (!book) {
        return (
            <div>
                <h3>We already haven't the details of this book</h3>
            </div>
        );
    }
    return <>
        <div className='container col-6'>
            <div className='d-flex' style={{ gap: '10px' }}>
                <div className='d-flex align-items-center' style={{ gap: '5px' }} >
                    <img src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png" alt="" style={{ width: '17px', height: '17px', marginBottom: '12px' }} />
                    <p><b>Authenticated</b></p>
                </div>
                <div>
                    {book?.authors?.map(author => (
                        <p key={author.id}>Tác giả: {author.name}</p>
                    ))}
                </div>
            </div>
            <div>
                <h4>Bản đồ</h4>
                <div className='d-flex' style={{ gap: '10px' }}>
                    <div className='d-flex' style={{ gap: '5px' }} >
                        <p>Đánh giá {book.rating_average}</p>
                        <i className="fa-solid fa-star" style={{ marginTop: '5px' }}></i>
                    </div>
                    <p>Đã bán: {book.quantity_sold?.value}</p>
                </div>
                <div>
                    <p><b style={{ color: 'Red' }}>{book.list_price}. VNĐ</b></p>
                </div>
            </div>
            <div>
                <h5>Thông tin chi tiết</h5>
                <div className='d-flex ' style={{borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Phiên bản sách </p>
                    <p>Phiên bản thường</p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Công ty phát hành </p>
                    <p>{book?.specifications[0]?.attributes?.[0]?.value || 'N/A'}</p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Ngày xuất bản </p>
                    <p>
                        {book.specifications[0]?.attributes?.[1]?.value}
                    </p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Kích thước</p>
                    <p>{book.specifications[0]?.attributes?.[2]?.value}</p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Dịch giả</p>
                    <p>{book.specifications[0]?.attributes?.[3]?.value}</p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Loại bìa</p>
                    <p>{book.specifications[0]?.attributes?.[4]?.value}</p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Số trang</p>
                    <p>{book.specifications[0]?.attributes?.[5]?.value}</p>
                </div>
                <div className='d-flex' style={{ gap: '70px', borderBottom: '1px solid #EBEBF0', justifyContent:'space-between' }}>
                    <p style={{ color: 'rgb(128, 128, 137)', justifyContent:'center' }}>Nhà xuất bản</p>
                    <p>{book.specifications[0]?.attributes?.[6]?.value}</p>
                </div>
            </div>
            <div className='mt-3'>
                <h4>Mô tả sản phẩm</h4>
                <div className=''>
                    <p>{parse(book.description)}</p>
                </div>
            </div>
        </div>
    </>

}

export default DetailMain