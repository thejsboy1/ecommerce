import React from 'react';
import Products from './components/Products';
import Header from './components/header';
import Filter from './components/Filter';
import {connect} from 'react-redux';
import { allProduct,filterBrand,filterColor } from './actions/myaction';
import Login from './components/login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      color: "",
      brand: "",
      price: "", 
      uniquecolorname: "",
      uniquebrand:""
    }
  }


 
  componentDidMount() {
    this.fetchUrl().then((e) => {
      // console.log(e)
      let fetchedData = []
      fetchedData = e.map((item) => {
        let newItem = {
          id:item.id,
          title:item.title,
          colour:item.colour,
          rating:item.rating,
          image: item.image,
          brand: item.brand,
          price: item.price,
          discount:item.discount
        }
        return newItem
      })
      this.props.finalProduct(fetchedData)
      this.setState({
        products: fetchedData,
        uniquebrand: [...new Set(fetchedData.map((item) =>item.brand))],
        uniquecolorname: [...new Set(fetchedData.map(item => item.colour.title))]
      })  
    })
  }


 
  
    
   





  fetchUrl = async () => {
    const apiUrl = 'https://xebiascart.herokuapp.com/products ';
    let data = await fetch(apiUrl).then((response) => response.json())
    return data;
    // console.log(data)
  }

  render() { 
    return ( 
      <div className="grid-container">
        {this.props.LoginValue!=''?
          <span>
            <Header></Header> 
            <main className="maincontent">
              <div className="content" >
                <div className="sidebar">
                  <Filter colornames={this.state.uniquecolorname} brandnames={this.state.uniquebrand}></Filter>
                </div>
                <div className="main"> 
                  <Products products={this.state.products} />
                </div> 
              </div>
            </main>
            <footer>
              all Rights is reserved.
          </footer>
          </span>
        :
        <Login></Login>
      } 
      </div>
    );

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
    finalProduct:(product)=>{dispatch(allProduct(product))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
