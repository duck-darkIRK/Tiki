import { useParams } from "react-router-dom";
import { useState } from "react";
import {books} from '../../data.json'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function AfterSearch(){
    const {name} = useParams();
    console.log(name);
    const book = books.find(item =>item.name == name)
    return <div>
        <Header></Header>
        <div className="d-flex" style={{gap:'15px'}}>
            <img src={book.images[0].base_url} alt=""  style={{width:'455px',height:'505px'}}/>
            <div>
                <h3>{book.name}</h3>
                {book.specifications[0].attributes.map(value=><p>{value.name}: {value.value}</p>)}
                <p></p>
                <p>{book.short_description}</p>
            </div>
            <div></div>
        </div>
        <Footer></Footer>
    </div>  
}
export default AfterSearch