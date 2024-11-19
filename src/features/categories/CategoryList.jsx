import React from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../components/ButtonLink";
import { DeleteBtn } from "../../components/DeleteBtn";
import { TitleBar } from "../../components/TitleBar";

const CategoryRow = ({ category }) => {
  return (
    <tr>
      <td>{category.id}</td>
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
  const categories = [
    {
      id: "1",
      name: "Smartphones",
    },
    {
      id: "2",
      name: "PCs",
    },
    {
      id: "3",
      name: "TVs",
    },
    {
      id: "4",
      name: "Tablettes",
    },
  ];
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

      <table className="table table-hover">
        <thead >
          <tr>
            <th>#</th>
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
    </>
  );
};
