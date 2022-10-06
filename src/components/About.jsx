import React from "react";
import { Link } from "react-router-dom";
import logo from './Screenshot_2022-06-22_015408-removebg-preview.png'

const mystyle = {
    width: "150px",
    height: "70px",
    color: "white"
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
        <div className="about">
            <h1>ABOUT US

            </h1>
            <p>This Web Application is made to enable us the ideas , knowledge behind the Crypto.
                This app is mainly build with the concept of Reactjs and Some APIs.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer><h2>Designed and Developed by Baljeet Singh</h2></footer>
            <div class="last">
                <a href="https://www.linkedin.com/in/baljeet-singh-6b6467202/">
                    <img src="https://www.iconpacks.net/icons/2/free-linkedin-icon-2166-thumb.png" alt=""></img>
                </a>
                <a href="https://github.com/waduhek1235">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""></img>
                </a>
                <a href="https://www.instagram.com/dby_baljeet/">
                    <img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png" alt=""></img>
                </a>
                <a href="https://twitter.com/Baljeetism">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png" alt=""></img>
                </a>

            </div>



        </div>
        <div className="cpy">
            <h6>© 2022 / caesar</h6>
        </div>

    </div>);
};
function About() {
    return (
        <div>
            <Home />



        </div>


    );
};
export default About;