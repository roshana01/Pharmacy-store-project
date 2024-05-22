import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [selectCart, setSelectCart] = useState([]);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [servesData, setServesData] = useState();
  const [successful] = useState("");
  const [showShop, setShowShop] = useState([]);
  const [team, setTeam] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //api product
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:8000/product?name=${query}`);
        const data = await res.json();
        setProduct(data);
      } catch ({ name, message }) {
        toast.error(name + " : " + message + " " + "(product)");
        setErrorMessage(message + " (Product  ⛔)");
      }
    })();
  }, [query]);

  //api serves box
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/dataServer");
        const data = await res.json();
        setServesData(data);
      } catch ({ name, message }) {
        toast.error(name + " : " + message + " " + "(dataServes)");
      }
    })();
  }, []);
  //api team
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/team");
        const data = await res.json();
        setTeam(data);
      } catch ({ name, message }) {
        toast.error(name + " : " + message + " " + "(team)");
      }
    })();
  }, []);

  // repeat code add product in the cart

  const addProductRepeatCode = (cart) => {
    const oldCartIndex = selectCart.findIndex((item) => item.id === cart.id);
    if (oldCartIndex !== -1) {
      setSelectCart((prev) => {
        prev[oldCartIndex].total += 1;
        return prev;
      });
      toast.success("add to cart number");
    } else {
      setSelectCart((selectCart) => [...selectCart, { ...cart, total: 1 }]);
      toast.success("The desired product has been added🛍️");
      setCount((count) => count + 1);
    }
  };

  //add product by shop
  const addProduct = (id) => {
    product.forEach((cart) => {
      if (cart.id === id) {
        addProductRepeatCode(cart);
      }
    });
  };

  //show product information:))
  const showBoxProduct = (id) => {
    const productItem = product.find((item) => item.id === id);
    setShowShop([productItem]);
  };

  //add product before show product
  const addShoppingCart = (id) => {
    showShop.map((cart) => {
      if (cart.id === id) {
        addProductRepeatCode(cart);
      }
    });
  };

  //*remove product in the buy list cart
  const removeItemProduct = (id) => {
    setSelectCart((perv) => perv.filter((item) => item.id != id));
    setCount((count) => count - 1);
    toast.success("The desired product has been deleted!");
  };

  //number of product button  in the page section itemCart products
  const previousAddProduct = (id) => {
    setSelectCart((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, total: item.total - 1 };
        }
        return item;
      });
    });
  };

  const nextAddProduct = (id) => {
    setSelectCart((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return { ...item, total: item.total + 1 };
        }
        return item;
      });
    });
  
  };

  return (
    <>
      <CounterContext.Provider
        value={{
          product,
          setProduct,
          query,
          setQuery,
          count,
          setCount,
          servesData,
          setServesData,
          selectCart,
          addProduct,
          setSelectCart,
          successful,
          showBoxProduct,
          showShop,
          addShoppingCart,
          removeItemProduct,
          team,
          errorMessage,
          previousAddProduct,
          nextAddProduct,
          // btnAddProduct,
        }}
      >
        {children}
      </CounterContext.Provider>
    </>
  );
};
const useCounter = () => {
  return useContext(CounterContext);
};
export { CounterProvider, useCounter };
