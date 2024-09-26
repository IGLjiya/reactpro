import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import "./SecondPage.css"


const SecondPage = () => {
        return (
            <div style={{position:"relative"}}>
                <div className='learnmore'><p>LEARN MORE <RiArrowRightSLine/> </p></div>
                <div>
                    <video muted autoPlay loop style={{width:"100vw"}}>
                        <source src='https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias'></source>
                    </video>
                    <div className='centerPosition'>
                        <p className='up'>A new era for safety</p>
                        <p className='down'>Does how you  feel affect<br></br> how you drive?</p>
                        <button className='button'>Learn More</button>
                    </div>
                </div>
            </div>
        );
}

export default SecondPage;
