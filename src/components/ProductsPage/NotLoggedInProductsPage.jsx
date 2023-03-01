// import UI components
import axios from "axios";
import { useEffect, useState } from "react";
import NotLoggedInNavBar from "../NavBar/NotLoggedInNavBar";
import NotLoggedInProductList from "./NotLoggedInProductList";

export default function NotLoggedInProductsPage() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => res.data.data)
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <NotLoggedInNavBar />
      <h1>PRODUCTS</h1>
      <NotLoggedInProductList products={products} />
    </>
  );
}
