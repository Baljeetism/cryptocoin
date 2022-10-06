import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import logo from './Screenshot_2022-06-22_015408-removebg-preview.png'
const mystyle = {
    width: "150px",
    height: "70px"
}
function News(props) {
    const [Randt, setRandt] = useState(null)
    const [Randu, setRandu] = useState(null)
    const [Rands, setRands] = useState(null)
    const [Rn, setRn] = useState("0")



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
        <div className="newscon">
            <button className="bttn" onClick={(e) => {

                e.preventDefault()
                setRn(Math.floor(Math.random() * 10) + 1)




                const options = {
                    method: 'GET',
                    url: 'https://crypto-news-live3.p.rapidapi.com/news',
                    headers: {
                        'X-RapidAPI-Key': 'a330aac227msh49094c537c94863p173c7ajsn287051d2259a',
                        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
                    }

                };

                axios.request(options).then(function (response) {
                    setRandt(response.data[Rn].title)
                    setRandu(response.data[Rn].url)
                    setRands(response.data[Rn].source)

                }).catch(function (error) {
                    console.error(error);
                });


            }}>CLICK HERE TO GET LATEST NEWS</button>

        </div>
        <div className="nos">
            <h1>{Randt} -</h1><h2>{Rands}</h2>
            <a href={Randu}><h3>Visit me!</h3></a>
            <br></br>
        </div>
        <div className="cpy">
            <h6>© 2022 / caesar</h6>
        </div>
    </div>);

}
export default News;