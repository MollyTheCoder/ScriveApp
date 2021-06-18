import React, { Component } from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory();

    // constructor = () => {
    //     this.state = {
    //         loginErrorMessage: "",
    //         authCredentials: {}
    //     }
    // }

    const sendLoginCredentials = (e) => {
        e.preventDefault();
        var endpointURL = "/auth?" + new URLSearchParams(new FormData(document.getElementById("LoginForm"))).toString();

        axios.post(endpointURL).then(response => {
            const data = response.data;
            if(data.status !== undefined && data.status === "error"){
                // this.setState({
                //    // loginErrorMessage: data.message
                // });
            } else {
                // this.setState({
                // //    authCredentials: data
                // });
                history.push('/list')
            }
        })
    }
    const getList = () => {
        const getListAPI = "/list?"+ Object.keys(this.state.authCredentials).map(key => key + '=' + this.state.authCredentials[key]).join('&');
        axios.get(getListAPI).then(response => {
             console.log(response)         
         })
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6  mx-auto column col-sm-offset-0 col-md-offset-2 col-lg-offset-3">
                    <h2 className="mb-3">Login to your Scrive account</h2>
                    <form className="form-horizontal" id="LoginForm"> 
                        <div className="form-group mb-4">
                            <div className="col-md-12">
                                <input id="UserEmail" name="email" type="test" placeholder="email" className="form-control input-md" />
                            </div>
                        </div>  
                        <div className="form-group mb-4">
                            <div className="col-md-12">
                                <input id="UserPassowrd" name="password" type="password" placeholder="password" className="form-control input-md" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12 mx-auto">
                            {/* <div className="invalid-feedback d-block">{this.state.loginErrorMessage}</div> */}
                                <button id="button1id" name="button1id" onClick={sendLoginCredentials} className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>          
            </div>
        </div>
    );
}

export default Login;