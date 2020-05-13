import React, { Component } from 'react'
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
import {Row,Col} from 'reactstrap';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList></CategoryList>
                    </Col>
                    <Col xs="9">
                        <ProductList></ProductList>
                    </Col>
                </Row>
            </div>
        )
    }
}
