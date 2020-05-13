import React, { Component } from "react";
import { connect } from "react-redux";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
            {this.props.cart.map(cartItem => 
              <DropdownItem key = {cartItem.product.id}>
                   {cartItem.product.productName}
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
          <NavLink>Sepetiniz boş</NavLink>
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

export default connect(mapStateToProps)(CartSummary);
