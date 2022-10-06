import React from 'react';
import logo from './Screenshot_2022-06-22_015408-removebg-preview.png'
import { Link } from "react-router-dom";
const mystyle = {
    width: "150px",
    height: "70px"
}

const Th1 = () => {

    return (
        <div>
            <nav className="navbar">

                <a href="/"><img src={logo} alt="ogm" style={mystyle}></img></a>

                <span >
                    <Link style={{ textDecoration: 'none' }} to="/bitcoin">Coins</Link>

                </span>
                <span >
                    <Link style={{ textDecoration: 'none' }} to="/Theory">Theory</Link>

                </span>
                <span >
                    <Link style={{ textDecoration: 'none' }} to="/news">News</Link>

                </span>
                <span >
                    <Link style={{ textDecoration: 'none' }} to="/about">About</Link>

                </span>






            </nav>
            <h1>Bitcoin Rainbow Price Chart</h1>
            <iframe src="https://www.blockchaincenter.net/static/rainbow-chart.html" scrolling='no' frameBorder={0}> </iframe>
            <div className="cpy">
                <h6>© 2022 / caesar</h6>
            </div>
        </div>
    );
}

export default Th1;
