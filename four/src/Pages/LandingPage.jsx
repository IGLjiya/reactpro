import React, { Fragment } from 'react';
import NavBar from '../Components/Navbar';
import SecondPage from '../Components/SecondPage';
import ThirdPage from '../Components/ThirdPage';


const LandingPage = () => {
        return (
            <Fragment>
                <NavBar/>
                <SecondPage/>
                <ThirdPage/>
            </Fragment>
        );
}

export default LandingPage;
