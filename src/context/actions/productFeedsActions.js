export const GET_PRODUCT_FEEDS = (productFeeds) => {
  return {
    type: "GET_PRODUCT_FEEDS",
    productFeeds: productFeeds,
  };
};

export const GET_PRODUCT_FEEDS_NULL = () => {
  return {
    type: "GET_PRODUCT_FEEDS_NULL",
    productFeeds: null,
  };
};
