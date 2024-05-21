import React from 'react';
import Logo from './Logo';
import Input from './Input';
import OptionOnTop from './OptionOnTop';
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from './HeaderMobile';
import BarOption from './BarOption';
// Component header
function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 480px)'
    })
    if (isDesktopOrLaptop) {
        return (
            <div className="header d-flex align-items-center" style={{ gap: '40px' }}>
                <Logo />
                <Input className="flex-grow-1" />
                <OptionOnTop className="d-none d-md-block" />
            </div>
        );
    }
    else{
        return <div style={{width:'100%'}}>
        <HeaderMobile></HeaderMobile>
        <hr />        
    </div>
    }
       
}
export default Header;