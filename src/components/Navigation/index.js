/*
Navigation bar will have
About me | Portfolio | Contact | Resume
*/
import React from 'react';

function Navigation (props){
    const { currentTab, setCurrentTab } = props;

	return (
        <ul class="nav nav-pills">
            <li class={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentTab("aboutme")}>About Me</span>
            </li>
            <li class={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentTab("myworks")}>Portfolio</span>
            </li>
            <li class={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentTab("contact")}>Contact Me</span>
            </li>
            <li class={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentTab("resume")}>Resume</span>
            </li>
        </ul>
    );
}

export default Navigation;