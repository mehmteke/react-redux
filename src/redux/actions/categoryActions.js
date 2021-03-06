import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  debugger;
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:53987/api/category"; //"http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
