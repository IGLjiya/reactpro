import React from 'react';
import { FiUser } from "react-icons/fi";
import "./navbar.css"


const Navbar = () => {
    return (
        <div className='navbar'>
            <div><img src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" alt="image not found" width={100} height={24} /></div>
            <a href='#'><ul>
                <li>Our Car</li>
                <li>Shop</li>
                <li>Owner</li>
                <li>About us</li>
            </ul></a>
            <div style={{display:"flex",alignItems:"center",gap:"15px"}}><button className='btn4'><FiUser size={20}/>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
