import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoader] = useState(false);
  const [cartError, setCartError] = useState(null);
  const [error, setError] = useState(null);

  //https://scary-polo-shirt-mite.cyclic.app - cyclic deploy
  //192.168.0.129 -> company ipv4
  //192.168.1.8 -> home
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://scary-polo-shirt-mite.cyclic.app/api/products"
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://scary-polo-shirt-mite.cyclic.app/api/categories"
      );
      setCategories(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSliders = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://scary-polo-shirt-mite.cyclic.app/api/sliders"
      );
      setSliders(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCart = async () => {
    setLoader(true);
    const token = await AsyncStorage.getItem("token");

    try {
      const endpoint = "https://scary-polo-shirt-mite.cyclic.app/api/cart/find";

      const headers = {
        "Content-Type": "application/json",
        token: "Bearer " + JSON.parse(token),
      };

      const response = await axios.get(endpoint, { headers });
      const cartProducts = response.data[0].products;

      setCartData(cartProducts);
      setLoader(false);
    } catch (error) {
      setCartError(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchSliders();
    fetchCart();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchProducts();
    fetchCategories();
    fetchSliders();
    fetchCart();
  };

  return {
    products,
    cartData,
    categories,
    sliders,
    isLoading,
    error,
    loading,
    cartError,
    refetch,
  };
};

export default useFetch;
