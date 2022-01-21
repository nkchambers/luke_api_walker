import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// SETUP FORM COMP Function >>> Creates Form to search Star Wars API
const Form = () => {

    //  Create State Variable for search field info from API
    let [searchFields, setSearchFields] = useState([])


    // Create State Variables for each input field in form
    // Search field and id are changing variables so we need to keep track of them in state
    let [selectedField, setSelectedField] = useState("")
    let [selectedId, setSelectedId] = useState(null)


    // Initialize useHistory so we can redirect after submitting form
    const history = useHistory();



    // Implement useEffect to prevent API call over and over and over (infinite loop)
    useEffect(() => {

        //  Make Axios Call to Star Wars API and get all data
        //  Wraps response in a .data object
        axios.get("https://swapi.dev/api/")
            .then(res => {
                //  Always console.log res (response) to see what data API brings back
                console.log("res >>> response from API", res)

                // Object.keys gives array of the keys from res.data object (response.data has categories as keys)
                console.log(Object.keys(res.data))

                // Set state variable (setSearchFields) to array of extracted categories/keys given from Object.keys
                // State variable will be used to loop through and render all categories/keys as search options in form
                setSearchFields(Object.keys(res.data))
                
                // Sets search field default to people >>> Object.keys gives res.data array with people key at index position 0
                setSelectedField(Object.keys(res.data)[0])
            })
            .catch(err => {
                console.log("These are not the droids you are looking for", err)
            })
    }, [])


    // Handle Form Submit - Function to run when the form submits
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!")
        // history.push >>> redirects to route depending on variables
        history.push(`/${selectedField}/${selectedId}`)
    }




    return (
        <div>

            <form onSubmit={handleSubmit} className='d-flex justify-content-evenly'>
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select onChange={(e) => {setSelectedField(e.target.value)}} className="form-select" id="">
                        {
                            searchFields.map((sfield, i) => {
                                return (
                                    <option key={i} value={sfield}>{sfield}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input onChange={(e) => {setSelectedId(e.target.value)}} type="number" className="form-control" name="" id="" />
                </div>
                <button type="submit" value="Search" className="btn btn-dark mt-3" style={{color: "yellow", padding: "0px 20px"}}>Search</button>
            </form>

        </div>
    );
};

export default Form;

