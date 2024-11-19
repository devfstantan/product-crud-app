import React, { useState } from "react";
import { TitleBar } from "../../components/TitleBar";
import { Input } from "../../components/form/Input";
import { intialValue, validate } from "./categoryForm";

const CreateForm = () => {
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
        value="Create"
        className="btn btn-primary"
        disabled={Object.keys(errors).length !== 0}
      />
    </form>
  );
};

export const CategoryCreate = () => {
  return (
    <>
      <TitleBar title="New Category" />
      <CreateForm />
    </>
  );
};
