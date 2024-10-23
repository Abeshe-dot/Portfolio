import React from "react";
import FeedIcon from '@mui/icons-material/Feed';
import { FaDog } from "react-icons/fa6";
function Project() {

    return (
        <div>

            <section id="Projects">
                
                <div id="newsOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="9000">
                            <img src="images/news-intro.png" className="d-block w-100" alt="tindog-pic"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="9000">
                            <img src="images/news-intro1.png" className="d-block w-100" alt="tindog2"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="9000">
                            <img src="images/news-signin.png" className="d-block w-100" alt="tindog2"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="9000">
                            <img src="images/homepage.png" className="d-block w-100" alt="tindog2"/>
                        </div>
                       

                    </div>
                    <div className="carousal-text">
                        <h6><FeedIcon /> News</h6>
                    </div>
                </div>

                <div id="tindogOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active " data-bs-interval="10000">
                            <img src="images/realtindog1.png" className="d-block w-100" alt="PersonalWeb-Pic"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <img src="images/realtindog2.png" className="d-block w-100" alt="PersonalWeb"/>
                        </div>

                    </div>
                    <div className="carousal-text">
                        <h6><FaDog />TinDog</h6>
                    </div>
                </div>

                <span className="publishedProject">
                  <h5>Here are some of the projects that i have worked on.</h5>
                  <p><a href="https://news-robel.vercel.app">News</a> :A news aggregator, which helps users to get latest and accurate news.</p>
                  <p><a href="https://zethrobel.github.io/yulassofttoys">Yulas Toy Store</a>: A shopping website for toys that are made for every age.</p>
                  <p><a href="https://github.com/zethrobel">And more on github</a></p>
                </span>

            </section>

        </div>
    )
}

export default Project