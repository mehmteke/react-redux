import React, { Component } from 'react'
import {connect} from 'react-redux';

 class CategoryList extends Component {
    render() {
                return (
            <div>
                <h3>Seçili Kategory : {this.props.currentCategory}</h3>
            </div>
        )
    }
}


function mapStateToProps(state){
   return {
       currentCategory : state.changeCategoryReducer
   }
}

export default connect(mapStateToProps)(CategoryList)