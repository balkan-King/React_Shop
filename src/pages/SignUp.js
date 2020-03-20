import React from 'react'
import withNavbar from './components/hoc/withNavbar/withNavbar'
import axios from 'axios';

function SignUp(){
    return (
        <div>
            <form className="marginTopForm">
                <label> Username: </label><br/>
                <input id="username" type="text"></input><br/>
                <label> Password: </label><br/>
                <input id="password" type="text"></input><br/><br/><br />
                <input type="submit" onClick={sendRequest.bind()} value="Sign-Up"></input><br/>
            </form>
        </div>
    )
}

function sendRequest(){
    let newUsername = document.getElementById("username").value;
    let newPassword = document.getElementById("password").value;
    axios.post('http://localhost:8080/users', {
        username: newUsername,
        password: newPassword
    });
}

export default withNavbar(SignUp)
