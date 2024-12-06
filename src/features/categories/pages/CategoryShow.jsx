import React, { useEffect } from "react";
import { TitleBar } from "../../../components/TitleBar";
import { ButtonLink } from "../../../components/ButtonLink";
import { DeleteBtn } from "../../../components/DeleteBtn";
import { deleteCategory, getCategory } from "../categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../../components/Loader";
import { Error } from "../../../components/Error";
import { CategoryProductTable } from "../parts/CategoryProductTable";



const CategoryDetails = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteCategory(category.id));
    navigate('/categories');
  }
  return ( 
      <>
      <TitleBar
        title={`Category: ${category.name}`}
        actions={
          <>
            <ButtonLink
              to={`/categories/${category.id}/edit`}
              variant="warning"
              icon="fa-regular fa-pen-to-square"
            >
              Edit
            </ButtonLink>
            <DeleteBtn 
             confirm={`Voulez-vous supprimer la catégorie ${category.name} ?`} 
             onDelete={handleDelete}
            />
          </>
        }
      />
      <h4>Products</h4>
      <CategoryProductTable id={category.id} />
    </>
    
  );
};

export const CategoryShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    item: category,
    loading,
    error,
  } = useSelector((state) => state.categories);


  useEffect(() => {
    dispatch(getCategory(id));
  }, []);

  return (
    <>
      <Loader loading={loading} text="Chargement de la catégorie..." />
      <Error error={error} />
      {!loading && !error && category && <CategoryDetails category={category}  />}
    </>
  );
};
