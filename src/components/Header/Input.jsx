import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import Book from "../Main/Book"
import BookDetail from "../../pages/BookDetail"
function Input(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 480px)'
      })
    const  [userBook,setUserBook] = useState("")
    function handleSearch(data){
        setUserBook(data)
    }
    if (isDesktopOrLaptop){
        return <div className="painput d-flex align-items-center" style={{border:'1px solid #DDDDE3', height:'46px', borderRadius:'10px', padding:'5px'}} >
        <img className="" src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" alt="" style={{width:'25px'}}/>
        <input onChange={(value)=>handleSearch(value.target.value)} type="text" placeholder="Tiki khuyến mãi 30K" style={{outline:'none', border:'none', width:'500px', marginLeft:'5px'}} />
        <button onClick={()=>handleBtnSearch()} className="bg-white" style={{color:'blue', height:'39px',borderLeft:'solid #DDDDE3 1px'}}><a href={'Search/'+ userBook}>Search</a></button>
    </div>
    }
}
export default Input