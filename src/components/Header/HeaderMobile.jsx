import BarOption from "./BarOption"

function HeaderMobile (){
    return<div>
         <nav className="navbar fixed-top"style={{backgroundColor: '#1BA8FF'}} >
                <div className="container col-12"  style={{backgroundColor:'#1BA8FF', color:'white',width:'100%',padding:'5px'}} >
                    <a className="navbar-brand" href="/" style={{textDecoration:'none'}}>Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="d-flex" style={{backgroundColor:"white", alignItems:'center', borderRadius:'5px', padding:'10px'}}>
                        <img src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" alt="" style={{width:'20px', height:'20px'}} /> 
                        <input type="text" placeholder="Bạn đang tìm kiếm gì" style={{outline:'none', border:'none', borderRadius:'5px'}}/>
                    </div>
                    <a href="" ><img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="" style={{width:'30px', height:'30px'}}/></a>
                </div>  
            </nav>
            <div style={{backgroundColor:'white', marginTop:'45px', fontSize:'12px', width:'100%'}}><BarOption></BarOption></div>           
    </div> 
   

}

export default HeaderMobile