import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from '../../redux/actions/cartActions';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge 
} from "reactstrap";
import { bindActionCreators } from "redux";

class CartSummary extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product);
    }  

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
            {this.props.cart.map(cartItem => 
              <DropdownItem key = {cartItem.product.id}>
                   <Badge color="danger" onClick = {()=>this.removeFromCart(cartItem.product)}>-</Badge>   
                   { " " + cartItem.product.productName + " "} 
                   <Badge color="success">{cartItem.quantity}</Badge>                                        
              </DropdownItem>    
            )}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpty() {
    return (
        <NavItem>
          <NavLink>Sepetiniz Boş</NavLink>
        </NavItem>
    );
  }

  render() {
    console.log("CartSummary :" + this.props.cart.length);
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch){
  return{
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart,
            dispatch
            )
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
