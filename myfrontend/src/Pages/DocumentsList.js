import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ContractCard from '../Components/ContractCard';
import NewDocument from '../Components/NewDocument';

const List = (props) => {

    const [documents, getDocuments] = useState([])

    const getList = () => {
        const getListAPI = "/list?"+ Object.keys(props.authCredentials).map(key => key + '=' + props.authCredentials[key]).join('&');
        axios.get(getListAPI).then(response => {
            getDocuments([...response.data.documents])
         })
    }

    //get documents list when component is rendered
    useEffect(() => {
        getList()
    }, []);

    //render documents list with custom component
    let availableDocuments = documents.filter(o => !o.is_trashed);
    let allDocuments = availableDocuments.length > 0 ? availableDocuments.map((o, i) => {
        return(
            <div key={i}>
                <ContractCard details={o} authCredentials={props.authCredentials} getDocID={props.getDocID}/>
            </div>
        )
    }): "You have no created documents";
   
    return (
        <div>
            <NewDocument authCredentials={props.authCredentials} getList={getList}/>
            <div className="documents-list">{allDocuments}</div>
        </div>
    );
    
}

export default List;