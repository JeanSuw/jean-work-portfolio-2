/*
My name as a header
*/
import React from 'react';
import Navigation from "../Navigation";

function Header (){
    const { currentTab, setCurrentTab } = props;
    return (

        <header>
            <h1>Jean's Website Portfolio</h1>
            <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab}></Navigation>
            <div class="jumbotron">
                <h1 class="display-4">Hi, everyone! Welcome to my Portfolio website</h1>
                <p class="lead">Who? Me! Try clicking on this button below.</p>
                
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Click me</a>
                </p>
            </div>
        </header>
    );
};