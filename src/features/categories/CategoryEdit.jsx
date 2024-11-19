import React, { useState } from "react";
import { Input } from "../../components/form/Input";
import { intialValue, validate } from "./categoryForm";
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
      <Input
        value={form.name}
        onChange={handleChange}
        error={errors?.name}
        id="name"
        name="name"
        type="text"
        label="Name"
      />
      <input
        type="submit"
        value="Update"
        className="btn btn-primary"
        disabled={Object.keys(errors).length !== 0}
      />
    </form>
  );
};

export const CategoryEdit = () => {
  return (
    <>
      <TitleBar title="Edit Category" />
      <EditForm />
    </>
  );
};
