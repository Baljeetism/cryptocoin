import React from "react";
import logo from './Screenshot_2022-06-22_015408-removebg-preview.png'
import { Link } from "react-router-dom";
const mystyle = {
    width: "150px",
    height: "70px"
}

function Theory() {



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



            <div className="th-img">

                <div>
                    <h1>Theories</h1>
                    <br />
                    <br />
                    <span >
                        <Link style={{ textDecoration: 'none' }} to="/th1"><h3>RainBow Theory</h3></Link>

                    </span>
                    <br />
                    <span disabled >
                        <Link style={{ textDecoration: 'none' }} to="/"><h3>Relative Strength Index</h3></Link>

                    </span>
                    <br />
                    <span disabled >
                        <Link style={{ textDecoration: 'none' }} to="/"><h3>Fear and Greed Index</h3></Link>

                    </span>
                </div>
                <img src="https://images.unsplash.com/photo-1646299220293-3ae516d9c275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319&q=80" alt="" srcset="" />
            </div>

        <div className="cpy">
        <h6>© 2022 / caesar</h6>
        </div>

    </div>);
}
export default Theory;