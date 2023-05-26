
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/Aboutme";
import Portfolio from './components/Myworks';
import Resume from './components/Resume';
import Form from './components/Contact';


function App(){
    const [currentTab, setCurrentTab] = useState("aboutme");

    const switchTab = () => {
        if (currentTab === "aboutme"){
            return <AboutMe />
        }
        if (currentTab === "portfolio"){
            return <Portfolio />
        }
        if (currentTab === "contact"){
            return <Form />
        }
        if (currentTab === "resume"){
            return <Resume />
        }
    }


    return (
        <div>
            
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
            <main>{switchTab()}</main>
            <Footer></Footer>
        </div>
    );

};

export default App;