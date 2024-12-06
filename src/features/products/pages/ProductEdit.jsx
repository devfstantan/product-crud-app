import React, { useEffect } from "react";
import { TitleBar } from "../../../components/TitleBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../productsSlice";
import { EditForm } from "../parts/EditForm";
import { fetchCategories } from "../../categories/categoriesSlice";


export const ProductEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {id} = useParams();

  const {item:product} = useSelector((state) => state.products);
  const { items: categories } = useSelector((state) => state.categories);

  useEffect(() => { 
    dispatch(getProduct(id));
    dispatch(fetchCategories());
  },[])

  const onSubmit=(form) => {
    dispatch(updateProduct({id:product.id, data:form}))
    navigate('/');
  }

  return (
    <>
      <TitleBar title="Edit Product" />
      {product && <EditForm defaultValue={product} categories={categories} onSubmit={onSubmit} /> }
    </>
  );
};
