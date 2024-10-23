import React from "react";

function Header() {
    return (
        <div id="header-bar">
           <section id="header-part">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <ul className="  navbar-nav ">
                        <li className="navbar-item">
                            <h6 className="nav-link">
                                robelZeleke</h6>
                        </li>
                    </ul>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="https://instagram.com/zethrobel">Instagram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://t.me/Robizel">Telegram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.abesheroba@gmail.com">Email</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/zethrobel">Github</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
           </section> 
        </div>
    )
}

export default Header