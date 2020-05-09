import * as actionsType from "./actionTypes";

export function getProductSuccess(products) {
  return {
    type: actionsType.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getProductList(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if(categoryId){
        url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductSuccess(result)));
  };
}
