import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const DocumentDetails = (props) => {

    const [documentDetails, saveDocumentDetails] = useState({});

    const getDocumentDetails = () => {
        const getDocumentDetailsAPI = "/document?documentId="+ props.documentID + "&" + Object.keys(props.authCredentials).map(key => key + '=' + props.authCredentials[key]).join('&');
        axios.get(getDocumentDetailsAPI).then(response => {
            saveDocumentDetails(response.data)
         })
    }

    //get documents details when component is rendered
    useEffect(() => {
        getDocumentDetails()
    }, []);

    return (
        <div  className="documents-detail">
            <div className="go-back mb-2"><Link to={'/List'}> go back to List</Link></div>
            <div className="card text-center">
                <div className="card-header">
                    {documentDetails.title}
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title mb-0 me-1">Document Status:</h5>
                        <p className="card-text">{documentDetails.status}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <h5 className="card-title mb-0 me-1">Document Version:</h5>
                        <p className="card-text">{documentDetails.object_version}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h5 className="card-title mb-0 me-1">Document Folder:</h5>
                       <p className="card-text">{documentDetails.folder_id}</p>
                    </div>
                    <div className="d-flex align-items-center">
                       <h5 className="card-title mb-0 me-1">Saved State:</h5>
                       <p className="card-text">{documentDetails.is_saved ? "saved" : "not saved"}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h5 className="card-title mb-0 me-1">Template State:</h5>
                       <p className="card-text">{documentDetails.is_template ? "template" : "not template"}</p>
                    </div>                    
                </div>
                <div className="card-footer text-muted">
                    Days to sign: {documentDetails.days_to_sign}
                </div>
                </div>
            
        </div>
    );
}

export default DocumentDetails;