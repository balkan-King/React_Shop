import React, {useState, useEffect} from 'react'
import withNavbar from './components/hoc/withNavbar/withNavbar';

const Home = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        if(localStorage.getItem('username') !== null)
            setUserName(localStorage.getItem('username')); 
        else
            setUserName('World');
    }, [localStorage.getItem('username')]);


    return (
        <div>
            <h1>Welcome to my first correct react page</h1>
            <h2>Hello {userName}!</h2>
            <a href="../LogIn" className="goldenEdgedBorder logInButton">Log-In</a>
        </div>
    )
}

export default withNavbar(Home)
