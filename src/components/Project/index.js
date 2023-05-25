/*
This is the decoration part for each individual projects.
This file used bootstrap kitchen sink card to make the project information look orgainized.
*/
import React, {useState} from 'react';

function Project (props){
    const projectObj = useState(props)[0].project;

    const pName = projectObj.projectName;
    const description = projectObj.description;
    const pImage = projectObj.screenshot;
    const githubLink = projectObj.github;
    const webLink = projectObj.deployed;
    const creators = projectObj.madeby;

    return (
        <div className='card center'>
            <div class="card" style={{width: "20rem"}}>
                <img class="card-img-top" src={require(`../../assets/images/${pImage}`)} alt="Jean's projects from githubs"/>
                <div class="card-body">
                    <h5 class="card-title">{pName}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Made by {creators}</li>
                </ul>
                <div class="card-body">
                    <a href={webLink} class="card-link">Website</a>
                    <a href={githubLink} class="card-link">Repository</a>
                </div>
            </div>
        </div>
    );
};

export default Project;