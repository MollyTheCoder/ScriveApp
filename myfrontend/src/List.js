import React, { Component } from 'react';
import axios from 'axios';

const List = () => {

    const createNewDoc = () => {
        const endpointURL = "/new?" + Object.keys(this.state.authCredentials).map(key => key + '=' + this.state.authCredentials[key]).join('&');;
            axios.post(endpointURL).then(response => {
                console.log(response)         
            })

        }
   
    return (
        <div>
            This is a list
        </div>
    );
    
}

export default List;