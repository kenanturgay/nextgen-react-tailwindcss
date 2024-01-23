export const ProductActions = {
  setProducts: "SET_PRODUCTS",
  removeProduct: "REMOVE_PRODUCT",
  addProduct: "ADD_PRODUCT",
};

const productInitial = {
  list: [],
};

export const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case ProductActions.setProducts:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};
