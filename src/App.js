import React from "react"
import LoginForm from "./components/loginForm";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import { func } from "prop-types";

const userInfo ={
    userName: 'ThienDuc',
    password: 'ducdeptrai'
}
function App() {
    var isLoggin = false;
    if (isLoggin) {
        return (
            <div>
                <Header/>
                <MemeGenerator/>
            </div>
        );
    }
        return (
            <div>
                <Header/>
                <LoginForm/>
            </div>
        )
}

export default App;