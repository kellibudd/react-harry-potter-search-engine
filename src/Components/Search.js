import React, { useState, useEffect } from "react"
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function Search(props) {

    function handleClick(event) {
        event.preventDefault();
        console.log('The link was clicked.');
    };

    return (
        <InputGroup className="searchBar">
            <FormControl
                placeholder="Enter search..."
                aria-label="Search bar"
                onChange={(event) => props.onSearch(event.target.value)}
            />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleClick}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default Search;