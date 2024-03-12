import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);
  const fetchProductList = async () => {
   try {
    const resp = await axios.get("https://fakestoreapi.com/products");
    setProductList(resp.data);
    setLoader(false);
   } catch (error) {
    setLoader(false);
    console.log("ERROR",error);
   }
  };

  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <>
      {productList?.length > 0 ? productList.map((item, i) => {
        return <h6 key={i}>{item.title}</h6>;
      }) : <h1>Loader....</h1>}
    </>
  );
}

export default App;
