export const ProductActions = {
  setProducts: "SET_PRODUCTS",
  removeProduct: "REMOVE_PRODUCT",
  addProduct: "ADD_PRODUCT",
  setLoading: "PRODUCTS_LOADING",
};

const productInitial = {
  list: [],
  loading: false,
};

export const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case ProductActions.setProducts:
      return { ...state, list: action.payload };

    case ProductActions.setLoading:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
