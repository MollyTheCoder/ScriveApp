import React from 'react';
import {Link} from 'react-router-dom';


const ContractCard = (props) => {
    let document = props.details;

    //get document ID for current doc in order to get information for document detail page
    const getDocID = () => {
        props.getDocID(document.id)
    }

    return (
        <div className="card mb-3">
            <div className="card-header">{document.title}</div>
                 <div className="card-body">
                 <h5 className="card-title">Document Information</h5>
                 <p className="card-text">
                     Status: {document.status}
                </p>
                <button type="button"  onClick={getDocID} className="btn btn-primary"><Link to={'/DocumentDetail'}>Get More Info </Link></button>
            </div>
        </div>
    );
}

export default ContractCard;