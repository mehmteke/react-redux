import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Table,Button} from 'reactstrap'
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'; 
import alertify from 'alertifyjs';
 

 class CartDetail extends Component {
     
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName  + " Silindi.");
    }
    render() {
        console.log(this.props.cart);
        return (
            <div>
          <Table>
             <thead>
               <tr>
                 <th>#</th>
                 <th>Product Name</th>
                 <th>Quantity Per Unit</th>
                 <th>Unit Price</th>
                 <th>Quantity</th>
               </tr>
             </thead>
             <tbody>
               {this.props.cart.map( (cartItem) => (
                 <tr key = {cartItem.product.id}>
                 <th>{cartItem.product.categoryId}</th>
                 <td>{cartItem.product.productName}</td> 
                 <td>{cartItem.product.unitPrice}</td> 
                 <td>{cartItem.quantity}</td>
                 <td>
                     <Button color="danger" size="sm" onClick = {()=>this.removeFromCart(cartItem.product)} >sil</Button>
                 </td>
               </tr>
               )
               )}
               
             </tbody>
         </Table>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
       cart : state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetail)