import React, { useEffect } from "react";
import { TitleBar } from "../../../components/TitleBar";
import { createProduct } from "../productsSlice";
import { CreateForm } from "../parts/CreateForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../categories/categoriesSlice";


export const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: categories } = useSelector((state) => state.categories);

  // Fetch Categories from the API.
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);


  const onSubmit = (form) => {
    dispatch(createProduct(form))
    navigate('/');
  }
  return (
    <>
      <TitleBar title="New Product" />
      <CreateForm onSubmit={onSubmit} categories={categories}/>
    </>
  );
};
