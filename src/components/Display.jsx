import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Display = () => {

    // useParams will allow us to extract variables
    // and destructure in order to display in component
    const { selectedField, selectedId } = useParams();


    //Create State Variable to hold display info from API call
    let [starWarsInfo, setStarWarsInfo] = useState({})


    //useEffect will prevent axios api call from continually running once display comp has rendered 
    useEffect(() => {
        //Axios API Call using variables from form inputs
        axios.get(`https://swapi.dev/api/${selectedField}/${selectedId}`)
            .then(res => {
                //Log API response to console to make sure its returning correct data
                console.log("res >>>> display info", res)

                //Set state var starWarsInfo to API response based on changed variables
                setStarWarsInfo(res.data)
            })
            .catch(err => {
                console.log("These are not the droids you are looking for", err)
            })
    }, [selectedField, selectedId])




    return (

        <div>
            {
                selectedField === "people"?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        <h5>Height: {starWarsInfo.height}inches</h5>
                        <h5>Eye Color: {starWarsInfo.eye_color}</h5>
                        <h5>Birth Year: {starWarsInfo.birth_year}</h5>
                    </div>

                : selectedField === "planets"?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        <h5>Climate: {starWarsInfo.climate}</h5>
                        <h5>Terrain: {starWarsInfo.terrain}</h5>
                        <h5>Population: {starWarsInfo.population}</h5>
                    </div>

                : selectedField === "films"?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        <h5>Title: {starWarsInfo.title}</h5>
                        <h5>Director: {starWarsInfo.director}</h5>
                        <h5>Release Date: {starWarsInfo.release_date}</h5>
                    </div>

                : selectedField === "species"?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        <h5>Classification: {starWarsInfo.classification}</h5>
                        <h5>Average Lifespan: {starWarsInfo.average_lifespan}</h5>
                        <h5>Language: {starWarsInfo.language}</h5>
                    </div>
                : selectedField === "starships"?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        <h5>Model: {starWarsInfo.model}</h5>
                        <h5>Hyperdrive Rating: {starWarsInfo.hyperdrive_rating}</h5>
                        <h5>Starship Class: {starWarsInfo.starship_class}</h5>
                    </div>
                : selectedField === "vehicles"?
                    <div>
                        <h1>{starWarsInfo.name}</h1>
                        <h5>Model: {starWarsInfo.model}</h5>
                        <h5>Passengers: {starWarsInfo.passengers}</h5>
                        <h5>Vehicle Class: {starWarsInfo.vehicle_class}</h5>
                    </div>
                :
                    <div>
                        <img src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt=""/>
                    </div>
            }
        </div>
    );
};

export default Display;
