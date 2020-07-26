import React, { Component } from 'react'
import formatcurrency from "./util"
import {connect} from 'react-redux'; 
import { addProductToCart } from '../actions/myaction';


class Products extends Component { 

    handlecartvalue = (value) => { 
        this.props.addProductToCart(value)
    } 

    render() { 
        let productData='';
        if(this.props.filterColor.length >0 || this.props.filterBrand.length >0|| this.props.SearchValue.length >0){
             productData = this.props.products &&  this.props.products.filter(product => 
                this.props.filterBrand.includes(product.brand)  
                ||  this.props.filterColor.includes(product.colour.title) 
                // ||  this.props.SearchValue.includes(product.title) 
                ).map((product) =>( 
                <li key={product.id}>
                    <div className="product">
                        <a href="#">
                            <span className="discount-box">{product.discount} %</span>
                            <img src={product.image} alt= {product.brand}/>
                        </a>
                        <div className="product-price"> 
                            <p>
                                {product.title}<br/>
                                {product.brand}<br/>
                                {formatcurrency(product.price.mrp)}
                            </p>
                            <p  >
                                <div className="colorbox" style={{backgroundColor:product.colour.color,borderColor:product.colour.color}}></div>
                                <button className="button-primary" onClick={()=>this.handlecartvalue(product.id)}> Add</button>
                            </p>
                        </div>
                    </div>
                </li>
            ));
        }else{
             productData = this.props.products &&  this.props.products.map((product) =>( 
                <li key={product.id}>
                    <div className="product">
                        <a href="#">
                            <span className="discount-box">{product.discount} %</span>
                            <img src={product.image} alt= {product.brand}/>
                        </a>
                        <div className="product-price"> 
                            <p>
                                {product.title}<br/>
                                {product.brand}<br/>
                                {product.price.mrp?formatcurrency(product.price.mrp):formatcurrency(product.price.final_price)}
                            </p>
                            <p  >
                                <div className="colorbox" style={{backgroundColor:product.colour.color,borderColor:product.colour.color}}></div>
                                <button className="button-primary" onClick={()=>this.handlecartvalue(product.id)}> Add</button>
                            </p>
                        </div>
                    </div>
                </li>
            ));
        }
       
           

        return (
            <div>
                <ul className="products">
                    {productData}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        filterColor:state.filterColor,
        filterBrand:state.filterBrand,
        SearchValue:state.SearchValue,
        
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{ 
      addProductToCart:(cartvalue)=>{dispatch(addProductToCart(cartvalue))}
    }
  }
  


export default connect(mapStateToProps,mapDispatchToProps)(Products);