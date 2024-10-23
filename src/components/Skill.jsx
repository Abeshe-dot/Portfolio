import React from "react";
import SecurityIcon from '@mui/icons-material/Security';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";

function Skill() {

    return (

        <div>
          <span><h3 className="skiller">My works are</h3></span>
            <section id="experince">
                <div className="row features">
                    <div className="col-lg-3 align-center">
                        <h1 className="icon"><FavoriteIcon /></h1>
                        <h3 className="h3-feature">User Friendly.</h3>
                        <p>Skilled in designing intuitive interfaces.</p>
                        <p><FaReact />, <FaBootstrap />, <IoLogoCss3 /></p>
                    </div>
                    <div className="col-lg-3 align-center">
                        <h1 className="icon"><SecurityIcon /></h1>
                        <h3 className="h3-feature">Secure</h3>
                        <p>Proficient in implementing robust security measures.</p>
                        <p><FaNode />, express, passportjs, <IoLogoJavascript /></p>
                    </div>
                    <div className="col-lg-3 align-center">
                        <h1 className="icon"><StorageIcon /></h1>
                        <h3 className="h3-feature">Database.</h3>
                        <p>Experienced in developing and managing efficient databases.</p>
                        <p>NoSql, <SiMongodb />, <IoLogoJavascript /></p>
                    </div>
                    <div className="col-lg-3 align-center">
                        <h1 className="icon"><ApiIcon /></h1>
                        <h3 className="h3-feature">API.</h3>
                        <p>Adapt at creating and integrating APIs for smooth communication.</p>
                        <p><FaNode />, express, <IoLogoJavascript /></p>
                    </div>
                </div>
            </section>
             

          <span>
                    <h1 className="big-header2">Sample project photos</h1>
         </span>             

        </div>
    )
}

export default Skill