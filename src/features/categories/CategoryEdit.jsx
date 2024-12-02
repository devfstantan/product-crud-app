import React, { useEffect } from "react";
import { TitleBar } from "../../components/TitleBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory, updateCategory } from "./categoriesSlice";
import { EditForm } from "./parts/EditForm";

export const CategoryEdit = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {id} = useParams();

  const {item:category} = useSelector((state) => state.categories)

  useEffect(() => { dispatch(getCategory(id)) },[])

  const onSubmit=(form) => {
    dispatch(updateCategory({id:category.id, data:form}))
    navigate('/categories');
  }

  return (
    <>
      <TitleBar title="Edit Category" />
      {category && <EditForm category={category} onSubmit={onSubmit} /> }
    </>
  );
};
