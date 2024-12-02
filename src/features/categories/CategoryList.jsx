import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../components/ButtonLink";
import { DeleteBtn } from "../../components/DeleteBtn";
import { TitleBar } from "../../components/TitleBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./categoriesSlice";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";

/**
 * Table Row Component
 * @param {*} category: object of the category to display  
 */
const CategoryRow = ({ category }) => {
  return (
    <tr>
      <td>
        <Link to={`/categories/${category.id}`}>{category.name}</Link>
      </td>
      <td className="d-flex justify-content-end gap-3">
        <ButtonLink
          to={`/categories/${category.id}/edit`}
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

export const CategoryList = () => {
  const disptach = useDispatch();
  const {
    items: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);

  // Fetch Categories from the API.
  useEffect(() => {
    disptach(fetchCategories());
  }, []);
  
  return (
    <>
      <TitleBar
        title="Categories List"
        actions={
          <>
            <ButtonLink
              to="/categories/create"
              variant="primary"
              icon="fa-solid fa-plus"
            >
              New Category
            </ButtonLink>
          </>
        }
      />
      <Loader loading={loading} text="Chargement des catégories..." />
      <Error error={error} />
      {!loading && !error && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <CategoryRow category={cat} key={cat.id} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
