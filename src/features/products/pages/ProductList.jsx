import React, { useEffect } from "react";
import { ButtonLink } from "../../../components/ButtonLink";
import { DeleteBtn } from "../../../components/DeleteBtn";
import { Link } from "react-router-dom";
import { TitleBar } from "../../../components/TitleBar";
import { Price } from "../../../components/product/Price";
import { Stock } from "../../../components/product/Stock";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/Loader";
import { Error } from "../../../components/Error";
import { deleteProduct, fetchProducts } from "../productsSlice";
import { ProductTable } from "../parts/ProductTable";


export const ProductList = () => {
  const disptach = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  // Fetch Categories from the API.
  useEffect(() => {
    disptach(fetchProducts());
  }, []);

  console.log(products)
  return (
    <>
      <TitleBar
        title="Products List"
        actions={
          <>
            <ButtonLink
              to="/products/create"
              variant="primary"
              icon="fa-solid fa-plus"
            >
              New Product
            </ButtonLink>
          </>
        }
      />
      <Loader loading={loading} text="Chargement des produits..." />
      <Error error={error} />
      {!loading && !error && <ProductTable products={products} />}
    </>
  );
};
