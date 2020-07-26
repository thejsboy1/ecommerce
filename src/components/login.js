import React, { Component } from 'react'
import {connect} from 'react-redux';
import { loginValue } from '../actions/myaction';

class login extends Component {
    constructor() {
        super();
        this.state = { 
          username: "", 
          password: "" ,
          value: "" ,

        }
 
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
           
    const apiUrl = 'https://xebiascart.herokuapp.com/users?username='+username;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => 
      this.setState({
        value: data[0] 
    },()=>{
        if(password===this.state.value.password){
            this.props.addLoginValue(this.state.value.fullName);
        }else{
            alert ('username or password incorrect');
    
        }
    })
    ); 
   

         
      }
      myChangeHandlerName = (event) => {
        let username = event.target.value;
        this.setState({
            username:username

        });
      }
      myChangeHandlerPassword = (event) => {
        let password = event.target.value;
        this.setState({
            password:password

        });
      }

    render() {
        return (
            <div class="wrap">
            <form class="login-form" onSubmit={this.mySubmitHandler}>
                <div class="form-header">
                    <h3>Login Form</h3> 
                </div> 
                <div class="form-group">
                    <input 
                    type="text" 
                    class="form-input" 
                    onChange={this.myChangeHandlerName}
                    placeholder="email@example.com"/>
                </div> 
                <div class="form-group">
                    <input 
                    type="password" 
                    class="form-input" 
                    // value={ this.state.password}
                    onChange={this.myChangeHandlerPassword}
                    placeholder="password"/>
                </div> 
                <div class="form-group">
                    <button class="form-button" type="submit"  >Login</button>
                </div> 
            </form>
        </div> 
        )
    }
}



const mapStateToProps = (state) => {
    return{
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      addLoginValue:(product)=>{dispatch(loginValue(product))}
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(login)