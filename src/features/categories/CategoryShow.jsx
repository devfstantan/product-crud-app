import React from "react";
import { TitleBar } from "../../components/TitleBar";
import { ButtonLink } from "../../components/ButtonLink";
import { DeleteBtn } from "../../components/DeleteBtn";
import { CategoryProducts } from "./parts/CategoryProducts";

export const CategoryShow = () => {
  const category = {
    id:1,
    name: "Smartphones"
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
            <DeleteBtn />
          </>
        }
      />
      <CategoryProducts category={category} />
    </>
  );
};
