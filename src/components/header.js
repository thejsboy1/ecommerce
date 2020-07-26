import React, { Component } from 'react'
import cart from '../cart.png'
import user from '../user.png'
import {connect} from 'react-redux';
import { searchValue } from '../actions/myaction';

class header extends Component {


   fetchUrl = async () => {
    const apiUrl = 'https://xebiascart.herokuapp.com/products ';
    let data = await fetch(apiUrl).then((response) => response.json())
    return data;
  }
    handleChange(evt) {
        this.props.searchValueAdd(evt.target.value)
      }


    render() {
        return (
            <header className="">
                <a href="home">React shopping cart</a>
                <input type='text' onChange={this.handleChange.bind(this)}/>
                <div>
                <img src={user} style={{width:'2rem',height:'2rem'}}/>{this.props.LoginValue}
                <img src={cart} style={{width:'2rem',height:'2rem'}}/>{this.props.productCart.length}
                </div>
          </header>
        )
    }
}


const mapStateToProps = (state) => {
    return{
      productCart:state.productCart,
      LoginValue:state.LoginValue
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{ 
        searchValueAdd:(value)=>{dispatch(searchValue(value))} 
    }
  }

  
  export default connect(mapStateToProps,mapDispatchToProps)(header)