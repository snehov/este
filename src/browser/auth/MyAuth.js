import React from 'react';
import axios from 'axios';
import apiSettings from '../app/apiSettings';

export  class MyAuth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        };
    }

    
    render() {
        return (
                <div>    
                </div>
                );
    }
}



export function passwordLogin(email, password, callback) {
        axios({
            method: apiSettings.method,
            url: apiSettings.url,
            headers: apiSettings.headers,
            data: {
                "email": email,
                "password": password
            }
        }).then(
                res => {
                    callback(res.data);
                }
        );
    }