import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Table, Badge } from "reactstrap";




class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
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
      ) 
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
