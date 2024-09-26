import React from 'react';
import "./fourthpage.css"

const FourthPage = () => {
    return (
        <div className='fourth'>
            <h1 style={{textAlign:"center"}}>Why Volvo?</h1>
            <div className="pic">
                <img src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1" alt="image not found" />
            </div>
            <div className="text">
                <div className="start">
                    <h3>Making your life easier</h3>
                    <p>Our new take on getting from A to B. Get access to a Volvo when you want it, how you want it.</p>
                </div>
                <div className="center">
                    <h3>Our future is electric</h3>
                    <p>All our cars are available with electrified power. We help you reduce the environmental impact of daily life.</p>
                </div>
                <div className="last">
                    <h3>Protecting what’s important</h3>
                    <p>We’re proud of our safety heritage. We’ll keep innovating new ways to help you protect what's important.</p>
                </div>

            </div>
            <div className='btun'><button  className="btn">Learn more about Volvo</button></div>
        </div>
    );
}

export default FourthPage;
