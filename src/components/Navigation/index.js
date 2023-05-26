/*
Navigation bar will have
About me | Portfolio | Contact | Resume
*/
import React from 'react';

function Navigation (props){
    const { currentTab, setCurrentTab } = props;

	return (
        <nav>
            <ul className="nav">
                <li className={currentTab === "aboutme" ? "nav-link-active" : "nav-link"}>
                    <span onClick={() => setCurrentTab("aboutme")}>About Me</span>
                </li>
                <li className={currentTab === "portfolio" ? "nav-link-active" : "nav-link"}>
                    <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                </li>
                <li className={currentTab === "contact" ? "nav-link-active" : "nav-link"}>
                    <span onClick={() => setCurrentTab("contact")}>Contact Me</span>
                </li>
                <li className={currentTab === "resume" ? "nav-link-active" : "nav-link"}>
                    <span onClick={() => setCurrentTab("resume")}>Resume</span>
                </li>

                <li></li>
            </ul>
        </nav>
    );
}

export default Navigation;