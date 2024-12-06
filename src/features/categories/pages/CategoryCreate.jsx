import React from "react";
import { TitleBar } from "../../../components/TitleBar";
import { useDispatch } from "react-redux";
import { createCategory } from "../categoriesSlice";
import { useNavigate } from "react-router-dom";
import { CreateForm } from "../parts/CreateForm";


export const CategoryCreate = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (form) => {
    dispatch(createCategory(form))
    navigate('/categories');
  }
  return (
    <>
      <TitleBar title="New Category" />
      <CreateForm onSubmit={onSubmit}/>
    </>
  );
};
