import React, {Component} from 'react';
import Header from '../common/header';
import Nav from  '../common/nav';
import Footer from '../common/footer';

class Home extends Component {

  constructor(props) {
      super(props);
      //this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    alert(this.props.name);
  }

  render() {
    return(
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img alt={this.props.children} src={this.props.image} className="img-responsive"/>
            <div className="caption">
              <p>
                <span>Product:</span> {this.props.children}
              </p>
              <p>
                <span>Price:</span> {this.props.price}
              </p>
              <p>
                <a href="#" className="btn btn-primary" onClick={this.onClick}>Action</a>
                <a href="#" className="btn btn-default">Action</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: 1,
          name: "Samsung",
          price: "12tr",
          image: "https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg",
          status: true
        },
        {
          id: 2,
          name: "Opple",
          price: "6tr",
          image: "https://www.gizbot.com/img/2017/11/apple-iphone-x-150528126450-04-1509781012.jpg",
          status: true
        },
        {
          id: 3,
          name: "Iphone 6s plus",
          price: "16tr",
          image: "https://9to5mac.files.wordpress.com/2014/09/iphone6-select-2014.png",
          status: false
        }
      ]
    };
  }

  onClick(text) {
    alert(text);
  }

  addProduct = () => {
    console.log(this.refs.product.value);
  }

  render() {
    var array = [
      {
        id: 1,
        name: "Samsung",
        price: "12tr",
        image: "https://drop.ndtv.com/TECH/product_database/images/329201783846PM_635_samsung_galaxy_s8.jpeg",
        status: true
      },
      {
        id: 2,
        name: "Opple",
        price: "6tr",
        image: "https://www.gizbot.com/img/2017/11/apple-iphone-x-150528126450-04-1509781012.jpg",
        status: true
      },
      {
        id: 3,
        name: "Iphone 6s plus",
        price: "16tr",
        image: "https://9to5mac.files.wordpress.com/2014/09/iphone6-select-2014.png",
        status: false
      }
    ];

    let element = array.map((value, index) => {
      let result = "";
      if(value.status) {
        result = <Home name={value.name} price={value.price} image={value.image} key={index}/>
      }
      return result;
    });

    let product = this.state.product.map((value, index) => {
    
    });

    return (
      <div id="page-wrap">
        <header id="header" className="header">
          <Header/>
          <Nav/>
        </header>
        <div className='container'>
          <div className="row">
            {element}
          </div>
          <div className="row">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="add product" ref="product"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
