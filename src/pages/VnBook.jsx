import { useMemo } from 'react'
import { books } from '../../data.json/'
import Book from "../components/Main/Book";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
function VnBook() {
  const arrayBook = useMemo(() => {
    return books.filter(book => book.categories.name == 'Sách tiếng Việt');
  }, [books]);
  return <div className=''>
    <Header></Header>
    <div style={{marginTop:'20px'}}>
      <h3 style={{color:'Grey'}}>Các cuốn sách thể loại: Sách tiếng Việt</h3>
      <div className='d-flex flex-wrap col-10' style={{ gap: '10px' }}>
        {arrayBook.map(book => <Book data={book} key={book.id}></Book>)}
      </div>
    </div>
    <Footer></Footer>
  </div>



}
export default VnBook