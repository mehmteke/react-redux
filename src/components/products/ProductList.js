import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Table, Badge, Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from 'alertifyjs';




class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart(product) {
    this.props.actions.addToCart({quantity:1,product});
    alertify.success(product.productName  + " Eklendi.");
  }
  
  render() { 
    return (
      <div>
        <h3>
          <Badge color="success">Products : {this.props.currentCategory}</Badge>{" "}
        </h3>
        <Table>
             <thead>
               <tr>
                 <th>#</th>
                 <th>Product Name</th>
                 <th>Quantity Per Unit</th>
                 <th>Unit Price</th>
                 <th>Units In Stock</th>
               </tr>
             </thead>
             <tbody>
               {this.props.products.map( (product) => (
                 <tr key = {product.id}>
                 <th>{product.categoryId}</th>
                 <td>{product.productName}</td>
                 <td>{product.quantityPerUnit}</td>
                 <td>{product.unitPrice}</td>
                 <td>{product.unitsInStock}</td>
                 <td>
                     <Button color="success" size="sm" onClick = {()=>this.addToCart(product)} >ekle</Button>
                 </td>
               </tr>
               )
               )}
               
             </tbody>
         </Table>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products:state.productListReducer
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(
        productActions.getProductList,
        dispatch
      ),
      addToCart : bindActionCreators(
        cartActions.addToCart,
        dispatch
      ) 
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
