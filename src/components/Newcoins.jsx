import React from 'react';
import Coinlist from './Coinlist';
import { Link } from "react-router-dom";
import Corousel from './Corousel';
import logo from './Screenshot_2022-06-22_015408-removebg-preview.png'

const mystyle = {
    width: "150px",
    height: "70px"
}

const Newcoins = (props) => {


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
            <div className='thiscant'>
                <Corousel />

            </div>
            <br>
            </br>
            <br>
            </br>
            <h4>Today's Cryptocurrency Prices by Market Cap</h4>
            <div className='coin-row'>

                <p>#</p>
                <p>    </p>
                <p>PRICE</p>
                <p>CHANGE</p>
                <p>TOTAL VOLUME</p>

                <p>MARKET CAPITAL</p>

            </div>

            {props.coins.map(coins => {
                return (
                    <Link style={{ textDecoration: 'none' }} to={`/coin/${coins.id}`}><Coinlist coins={coins} /></Link>



                )
            })}
            <div className="cpy">
                <h6>© 2022 / caesar</h6>
            </div>
        </div>
    );
}

export default Newcoins;
