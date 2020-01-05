import React from "react"
import LoginForm from "./components/loginForm";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import "./App.css";




class App extends React.Component {
    state = {
        isAuth: false
    }

    handleLoginSuccess = () => {
        this.setState({isAuth: true});
    }
    handleLoginFailed = () => {
        this.setState({isAuth: false});
    }
    render() {
        const {isAuth} =this.state;
        return(
            <div>
                <Header/>
                {isAuth ? <MemeGenerator/> : <LoginForm handleLoginSuccess={this.handleLoginSuccess} 
                    handleLoginFailed={this.handleLoginFailed}/>}
            </div>
        )
    }

}

export default App;