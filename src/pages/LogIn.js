import React, {useEffect} from 'react'
import withNavbar from './components/hoc/withNavbar/withNavbar';
import axios from 'axios';

const LogIn = () => {

    let userData = []

    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then(res => {userData = res.data;});
    }, [])

    function compare(){
        userData.find(user => {
            console.log(user.username);
            console.log(document.getElementById("username").value);
            if(user.username===document.getElementById("username").value && user.password===document.getElementById("password").value){
                localStorage.setItem("authorized", "true");
                localStorage.setItem("username", user.username)
            }
            else{
                console.log("wrong")
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <form className="marginTopForm">
                        <label>Username:</label><br />
                        <input type="text" name="username" id="username"></input><br />
                        <label>Password:</label><br />
                        <input type="text" name="password" id="password"></input><br /><br /><br />
                        <button onClick={() => {compare()}}>Log-In</button>
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default withNavbar(LogIn)
