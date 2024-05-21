import { useParams } from 'react-router-dom'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { books } from '../../data.json'
import DetailLeft from './DetailLeft';
import DetailMain from './DetailMain';
import DetailRight from './DetailRight';

function BookDetail() {
    // React hook
    return<>
    <div ><Header></Header></div>
    <div className='d-flex' style={{gap:'10px', marginTop:'10px'}}>
        <DetailLeft></DetailLeft>
        <DetailMain></DetailMain>
        <DetailRight></DetailRight>     
    </div>
    </> 
}

export default BookDetail;