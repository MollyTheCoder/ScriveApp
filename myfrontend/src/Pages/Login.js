import React, { useState  } from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom";

const Login = ({saveAuthCredentials}) => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    //authenticate user and save authetication credentials to pass to components
    const sendLoginCredentials = (e) => {
        e.preventDefault();
        var endpointURL = "/auth?" + new URLSearchParams(new FormData(document.getElementById("LoginForm"))).toString();

        axios.post(endpointURL).then(response => {
            const data = response.data;
            if(data.status !== undefined && data.status === "error"){
                setErrorMessage(data.message)
            } else {
                saveAuthCredentials({...data})
                history.push('/List')
            }
        })
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-4  mx-auto column col-sm-offset-0 col-md-offset-2 col-lg-offset-3">
                    <h1 className="mb-2">Login to your Scrive account</h1>
                    <h4 className="brand-color mb-2">Enter your email and password.</h4>
                    <form className="form-horizontal" id="LoginForm"> 
                        <div className="form-group mb-2">
                            <div className="col-md-12">
                                <input id="UserEmail" name="email" type="test" placeholder="email" className="form-control input-md" />
                            </div>
                        </div>  
                        <div className="form-group mb-2">
                            <div className="col-md-12">
                                <input id="UserPassowrd" name="password" type="password" placeholder="password" className="form-control input-md" />
                            </div>
                        </div>
                        <div className="col-md-12 mx-auto mb-2">
                            <div className="invalid-feedback d-block">{errorMessage}</div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12 mx-auto">
                                <button type="submit" onClick={sendLoginCredentials} className="btn btn-primary col-sm-12">Login</button>
                            </div>
                        </div>
                    </form>
                </div>          
            </div>
        </div>
    );
}

export default Login;