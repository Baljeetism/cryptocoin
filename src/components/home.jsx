import React from "react";
import { Link } from "react-router-dom";
import logo from './Screenshot_2022-06-22_015408-removebg-preview.png'
const mystyle = {
    width: "150px",
    height: "70px"
}
function Home() {
    return (<div>
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
        <div className="content">
            <div>
                <h1>Welcome to CryptoCoin</h1>
                <br></br>
                <br>
                </br>
                <h3>
                    Your Crypto Partner which give you idea to Invest in Bitcoin, Ethereum, & other 200+ crypto assets.
                </h3>

                <br>
                </br>
                <br></br>
                <br>
                </br>
                <br></br>
                <h1>Be the first to know , <br></br>about crypto news every day</h1>


            </div>

            <div>
                <img src="https://images.unsplash.com/photo-1635501300433-ed4e02fce51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" srcset="" />
            </div>

        </div>
        <div className="cpy">
            <h6>© 2022 / caesar</h6>
        </div>

    </div>);
};
export default Home;