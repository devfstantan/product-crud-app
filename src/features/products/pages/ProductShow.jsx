import React, { useEffect } from "react";
import { Price } from "../../../components/product/Price";
import { TitleBar } from "../../../components/TitleBar";
import { ButtonLink } from "../../../components/ButtonLink";
import { DeleteBtn } from "../../../components/DeleteBtn";
import { Stock } from "../../../components/product/Stock";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getProduct } from "../productsSlice";
import { Loader } from "../../../components/Loader";
import { Error } from "../../../components/Error";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    navigate('/');
  }
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
            <DeleteBtn 
             confirm={`Voulez-vous supprimer le produit ${product.title} ?`} 
             onDelete={handleDelete}
            />
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
            <Stock value={product.quantity} />
          </span>
        </div>
      </div>
    </>
  );
};

export const ProductShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    item: product,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <Loader loading={loading} text="Chargement du produit..." />
      <Error error={error} />
      {!loading && !error && product && <ProductDetails product={product} />}
    </>
  );
};
