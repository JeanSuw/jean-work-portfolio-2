/*
My name as a header
*/
import React from 'react';
import Navigation from "../Navigation";

function Header (props){
    const { currentTab, setCurrentTab } = props;
    return (

        <header>
            <h1>Jean's Website Portfolio</h1>
            <div>
                <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab}></Navigation>
            </div>
            
        </header>
    );
};

export default Header;