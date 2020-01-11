import React, { Component } from 'react';

const userInfo={
    userName: 'admin',
    password: 'root'
}
class LoginForm extends Component {
    state = {
        account: { username:'',password:'' },
        errors: {}
    }

    validate = () => {
        const errors ={};
        const { account } = this.state;
        if (account.usernam.trim()==='')
            errors.username = 'Username is required.';
        if (account.password.trim()==='')
            errors.password = 'Password is required.'
    }
    handleSubmit = e => {
        e.preventDefault();
        const {username,password} = this.state.account;
        const {handleLoginSuccess, handleLoginFailed} = this.props;
        if (userInfo.userName===username && userInfo.password===password){
            handleLoginSuccess();
            console.log('Login Successfully');
        } else {
            handleLoginFailed();
            console.log('Login Failed');
        }
        console.log("Submitted");
    }
    handleChange = ({ currentTarget: input}) =>{
        const account = { ...this.state.account};
        account[input.name]=input.value;
        this.setState({ account});
    };
    render(){
        const { account } = this.state;
        return (<body style={{
            backgroundColor: '#33cccc'
          }}>
            >
            <div id="login">
                <div class="container">
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <form id="login-form" class="form" action="" method="post"
                                         onSubmit={this.handleSubmit}>
                                    <h3 class="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label for="username" class="text-info">Username:</label><br />
                                        <input 
                                            value={account.username}
                                            onChange={this.handleChange}
                                            id="username" 
                                            name="username"
                                            type="text" 
                                            className="form-control" />
                                    </div>
                                    <div className="form-group">
                                     <label for="password" class="text-info">Password:</label><br/>
                                        <input 
                                            value={account.password}
                                            onChange={this.handleChange}
                                            name="password"
                                            id="password" 
                                            type="password" 
                                            className="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="submit" class="btn btn-info btn-md" value="Login" />
                                    </div>

                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>);
            ;
        }
}
export default LoginForm;