import React from "react";
import { ButtonLink } from "../../components/ButtonLink";
import { DeleteBtn } from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import { TitleBar } from "../../components/TitleBar";
import { Price } from "../../components/product/Price";
import { Stock } from "../../components/product/Stock";

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </td>
      <td className="text-end">
        <Price value={product.price} />
      </td>

      <td className="text-end">
        <Stock value={product.quantity} />
      </td>
      <td>
        <Link to={`/categories/${product.categorie.id}`}>
          {product.categorie.name}
        </Link>
      </td>
      <td className="d-flex justify-content-end gap-3">
        <ButtonLink
          to={`/products/${product.id}/edit`}
          variant="warning"
          icon="fa-regular fa-pen-to-square"
        >
          Edit
        </ButtonLink>
        <DeleteBtn />
      </td>
    </tr>
  );
};

export const ProductList = () => {
  const products = [
    {
      id: "1",
      title: "Produit 1",
      price: 100,
      quantity: 10,
      categorieId: "1",
      categorie: {
        id: "1",
        name: "Smartphones",
      },
    },
    {
      id: "2",
      title: "Produit 2",
      price: 1000,
      quantity: 2,
      categorieId: "2",
      categorie: {
        id: "2",
        name: "PCs",
      },
    },
    {
      id: "3",
      title: "Produit 3",
      price: 1000,
      quantity: 0,
      categorieId: "1",
      categorie: {
        id: "1",
        name: "Smartphones",
      },
    },
  ];
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

      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
