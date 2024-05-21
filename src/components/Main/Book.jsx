import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
function Book(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 480px)'
    })
    if (isDesktopOrLaptop) {
        return <a href={'book/' + props.data.id} className="card" style={{ width: "12rem", height: '19rem' }}>
            <img src={props.data.images[0].base_url} className="card-img-top" alt={props.data.name}
                style={{ width: '9rem', height: '9rem'}} />
            <div className="card-body">
                <p className="card-text" style={{ fontSize: '14px' }}>
                    <p className='text-truncate'>{props.data.name}</p>
                    <b style={{ fontSize: '12px' }}>{props.data.list_price}đ</b>

                </p>
            </div>
        </a>    
    }
    else {
        return <a href={'book/' + props.data.id} className="card" style={{ width: "12rem", height: '12rem', justifyContent:'center', alignItems:'center' }}>
            <img src={props.data.images[0].large_url} className="card-img-top" alt="..."/>
            <div className="card-body" style={{width:'inherit'}}>
                <p className="card-text" style={{ fontSize: '9px' }}>
                    <p className='text-truncate'>{props.data.name}</p>
                    <b style={{ fontSize: '6px' }}>{props.data.list_price}đ</b>
                </p>
            </div>
        </a>
    }

}

export default Book;