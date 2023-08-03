const productFeedsReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_PRODUCT_FEEDS":
      return {
        ...state,
        productFeeds: action.productFeeds,
      };
    case "GET_PRODUCT_FEEDS_NULL":
      return {
        ...state,
        productFeeds: null,
      };
    default:
      return state;
  }
};

export default productFeedsReducer;
