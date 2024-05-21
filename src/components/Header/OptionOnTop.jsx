import { useState } from "react";
import buttonOnTop from "./buttonOpTop";
function OptionOnTop(){
    return<div className="d-flex align-items-center" style={{gap:'10px'}}>
        <div className="d-flex" style={{gap:'10px'}}>
            <img src="	https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png" alt="" style={{width:'25px', height:'25px'}} />
            <p>Trang chủ</p>
        </div>
        <div className="d-flex" style={{gap:'10px'}}>
            <img src="	https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png" alt="" style={{width:'25px', height:'25px'}} />
            <p>Tài khoản</p>
        </div>
        <div className="d-flex " style={{gap:'10px', borderLeft:'1px solid black'}}>
            <button onClick={()=>handleStore()} style={{backgroundColor:'white'}}><img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="" style={{width:'30px', height:'30px'}}/></button>
            {/* <buttonOnTop></buttonOnTop> */}
        </div>  
        
    </div>
}
export default OptionOnTop

