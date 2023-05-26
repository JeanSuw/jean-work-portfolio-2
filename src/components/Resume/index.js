import React from 'react';

function Resume () {
    return (
        <section>
            <h2>Resume</h2>
            
            <h3>For Software engineer</h3>
            <h3>For Frontend web developer</h3>
            <h3>For Backend web developer</h3>

            <p>*** Downloadable versions: To be determine ***</p>

            <h4>Frontend Proficiencies</h4>
            <ul className="list-group">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS: Bootstrap & Bulma</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">JS Library: jQuery</li>
                <li className="list-group-item">React</li>
            </ul>

            <h4>Backend and Database Proficiencies</h4>
            <ul className="list-group">
                <li className="list-group-item">APIs</li>
                <li className="list-group-item">NodeJS & ExpressJS</li>
                <li className="list-group-item">Rest API</li>
                <li className="list-group-item">SQL: MySQL</li>
                <li className="list-group-item">NoSQL: MongoDB</li>
            </ul>

        </section>
    );
};

export default Resume;