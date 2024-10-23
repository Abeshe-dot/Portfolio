import React from "react";

function Introduction() {
    return (
        <div>
            <section id="intro-section">
                <div className="row">
                    <div className="col-lg-6 intro-text-col">
                        <h2 className="intro-text-header">Nice to meet you! I'm {" "}
                            <u>Robel Zeleke.</u>
                        </h2>
                        <p className="intro-text-paragraph">Based in Ethiopia. I'm a self-taught full-stack (MERN)
                            developer passionate about building accessible web-apps that users l❤ve.</p>
                        <a href="#footer-message" className="anchor-tag btn btn-outline-light">contact me</a>
                    </div>
                    <div className="col-lg-6 col-md-6 intro-image-col">
                        <img src="images/profile.jpg" alt="profile-pic" className="intro-image" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Introduction