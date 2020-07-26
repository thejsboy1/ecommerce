import React, { Component } from 'react'
import {connect} from 'react-redux';
import { filterBrandAdd,filterBrandDelete,filterColorAdd, filterColorDelete } from '../actions/myaction';


class Filter extends Component {
    constructor() {
        super();
        this.state = {
            valueBrandFilter: [],
            valueColorFilter: [],  
        }
      }

    handleBrandFilter = (value) => { 
        const currentbrandindex = this.state.valueBrandFilter.indexOf(value);
        const newbrandchecked = [...this.state.valueBrandFilter]
        if(currentbrandindex===-1){
            newbrandchecked.push(value);
            this.props.filterBrandNameAdd(value);
        }else{
            newbrandchecked.splice(currentbrandindex,1);
            this.props.filterBrandNameDelete(value)
        }
        this.setState({
            valueBrandFilter:newbrandchecked
          })   
    }


    handleColorFilter = (value) => { 
        const currentColorindex = this.state.valueColorFilter.indexOf(value); 
        const newColorchecked = [...this.state.valueColorFilter]
        if(currentColorindex===-1){
            newColorchecked.push(value)
            this.props.filterColorNameAdd(value)
        }else{
            newColorchecked.splice(currentColorindex,1)
            this.props.filterColorNameDelete(value)
        }
        this.setState({
            valueColorFilter:newColorchecked
          })   
    }
    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <div><b>order</b><br/> 
                    {this.props.brandnames && this.props.brandnames.map((brandname) =>(
                        <span>
                           <input type="checkbox" onChange={()=>this.handleBrandFilter(brandname)} />
                           {brandname}
                        </span>
                        ))
                    }  
                </div>
                <div><b>Color</b><br/> 
                        {this.props.colornames && this.props.colornames.map((colername) =>(
                             <span> 
                                <input type="checkbox" onChange={()=>this.handleColorFilter(colername)} />
                                {colername}
                            </span> 
                        ))}  
                </div>
                <div><b>Price</b><br/> 
                        /////////
                </div>
                <div><b>Discount</b><br/> 
                       //////////
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return{ 
      filterColorNameAdd:(colorname)=>{dispatch(filterColorAdd(colorname))},
      filterColorNameDelete:(colorname)=>{dispatch(filterColorDelete(colorname))},
      filterBrandNameAdd:(brandname)=>{dispatch(filterBrandAdd(brandname))},
      filterBrandNameDelete:(brandname)=>{dispatch(filterBrandDelete(brandname))}
    }
  }
  
  
  export default connect(null,mapDispatchToProps)(Filter);