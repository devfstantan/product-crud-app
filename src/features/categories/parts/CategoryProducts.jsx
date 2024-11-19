import React from "react";
import { Link } from "react-router-dom";
import { Price } from "../../../components/product/Price";
import { Stock } from "../../../components/product/Stock";
import { ButtonLink } from "../../../components/ButtonLink";
import { DeleteBtn } from "../../../components/DeleteBtn";
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

export const CategoryProducts = ({ category }) => {
  const products = [
    {
      id: "1",
      title: "Produit 1",
      price: 1000,
      quantity: 10,
      categorieId: "1",
    },
    {
      id: "3",
      title: "Produit 3",
      price: 1000,
      quantity: 0,
      categorieId: "1",
    },
  ];
  return (
    <table className="table table-hover">
      <thead className="text-center">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
};
