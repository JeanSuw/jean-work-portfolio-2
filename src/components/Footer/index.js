/*
This is set at the bottom of the website
Things inside the footer

Home (Label, no links)
    - About me (link)
    - Project (link)
    - Resume (link)
    - Contact (link)
    My contact
    - github
    - linkedin
*/
import React from 'react';

function Footer (){
    return (
        <footer className='footer'>
            <p>Github: <a href="https://github.com/JeanSuw">github.com/JeanSuw</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/jeansuwatcharoenchai/">www.linkedin.com/in/jeansuwatcharoenchai</a></p>
        </footer>
    );
};

export default Footer;