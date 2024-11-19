import React, { useState } from "react";
import { intialValue, validate } from "./productForm";
import { Input } from "../../components/form/Input";
import { TitleBar } from "../../components/TitleBar";

const EditForm = () => {
  const [form, setForm] = useState(intialValue);

  const errors = validate(form);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <Input
        value={form.title}
        onChange={handleChange}
        error={errors?.title}
        id="title"
        name="title"
        type="text"
        label="Title"
      />
      {/* Price */}
      <Input
        value={form.price}
        onChange={handleChange}
        error={errors?.price}
        id="price"
        name="price"
        type="number"
        label="Price"
      />
      {/* Quantity */}
      <Input
        value={form.quantity}
        onChange={handleChange}
        error={errors?.quantity}
        id="quantity"
        name="quantity"
        type="number"
        label="Stock"
      />
      <input
        type="submit"
        value="Create"
        className="btn btn-primary"
        disabled={Object.keys(errors).length !== 0}
      />
    </form>
  );
};


export const ProductEdit = () => {
  return (
    <>
      <TitleBar title="Edit Product" />
      <EditForm />
    </>
  );
};
