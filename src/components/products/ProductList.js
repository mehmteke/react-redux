import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class ProductList extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>{" "}
        </h3>
        <h3>
          <Badge color="success">
            {" "}
            {this.props.currentCategory}
          </Badge>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(ProductList);
