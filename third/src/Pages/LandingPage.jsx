import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar';
import SecondPage from '../Components/SecondPage';
import ThirdPage from '../Components/thirdPage';
import FourthPage from '../Components/fourthPage';
import FifthPage from '../Components/fifthPage';
import SixthPage from '../Components/sixthPage';

const LandingPage = () => {
        return (
            <Fragment>
                <Navbar />
                <SecondPage />
                <ThirdPage />
                <FourthPage />
                <FifthPage />
                <SixthPage />
            </Fragment>
        );
}

export default LandingPage;
