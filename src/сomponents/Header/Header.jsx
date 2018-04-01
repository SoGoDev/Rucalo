import React from 'react';
import styleHeader from './Header.css';
import imgLogo from './RUCOLA.png';

function Header (){
    return(
        <div >
            <div className="container-Header">
                <div>Rucola</div>
                <img src={imgLogo}/>
            </div>
        </div>
    )
}
export default Header;