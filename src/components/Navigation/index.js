/*
Navigation bar will have
About me | Portfolio | Contact | Resume
*/
import React from 'react';

function Navigation (props){
    const { currentTab, setCurrentTab } = props;

	return (
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" href="#">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Resume</a>
            </li>
        </ul>
    );
}