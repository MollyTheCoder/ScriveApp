import React from 'react';
import axios from 'axios';

const NewDocument = ({authCredentials, getList}) => {

    //make call to create new document in list
    const createNewDoc = () => {
    const endpointURL = "/new?" + Object.keys(authCredentials).map(key => key + '=' + authCredentials[key]).join('&');;
        axios.post(endpointURL).then(response => {
            //re-render list after new document is created
            getList()        
        })
    }
    
    return (
        <div className="d-flex justify-content-end mb-2">
            <button type="button" className="btn btn-warning" onClick={createNewDoc}>Create new document</button>
        </div>
    );
}

export default NewDocument;