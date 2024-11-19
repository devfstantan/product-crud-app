import React from "react";
import { Price } from "../../components/product/Price";
import { TitleBar } from "../../components/TitleBar";
import { ButtonLink } from "../../components/ButtonLink";
import { DeleteBtn } from "../../components/DeleteBtn";
import { Stock } from "../../components/product/Stock";

export const ProductShow = () => {
  const product = {
    id: "1",
    title: "Produit 1",
    price: 1000,
    quantity: 10,
    categorieId: "1",
    categorie: {
      id: "1",
      name: "Smartphones",
    },
  };
  return (
    <>
      <TitleBar
        title={`Product: ${product.title}`}
        actions={
          <>
            <ButtonLink
              to={`/products/${product.id}/edit`}
              variant="warning"
              icon="fa-regular fa-pen-to-square"
            >
              Edit
            </ButtonLink>
            <DeleteBtn />
          </>
        }
      />

      <div className="d-flex gap-4">
        {/* Price Field */}
        <div className="mb-3">
          <h4>Price:</h4>
          <span className="display-6">
            <Price value={product.price} />
          </span>
        </div>
        {/* Stock Field */}
        <div className="mb-3">
          <h4>Stock:</h4>
          <span className="display-6">
            <Stock value={product.stock} />
          </span>
        </div>
      </div>
    </>
  );
};
