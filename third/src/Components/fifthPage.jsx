import React from 'react';
import "./fifthPage.css"

const FifthPage = () => {
        return (
            <div className='fifth'>
                <div className="start">
                    <h2>Electric Charging</h2>
                    <p>Charging your electric car at home and on the road can be easy, fast and cost-effective.</p>
                    <button className='btn2'>Charging your car</button>
                </div>
                <div className="end">
                    <img width={600} height={450} src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blta1b7e2a9b2b4ec75/6578674705aefe000e4a9548/xc40_4-3.png?branch=prod_alias&auto=webp&iar=0&w=640&imdensity=1" alt="Volvo car" />
                </div>
            </div>
        );
}

export default FifthPage;
