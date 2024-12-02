
import { useState } from "react";
import { intialValue, validate } from "../categoryForm";
import { Input } from "../../../components/form/Input";

export const EditForm = ({category=intialValue, onSubmit}) => {
    const [form, setForm] = useState(category);
  
    // Validation errors 
    const errors = validate(form);
  
    // Form input change event
    const handleChange = (e) => {
      let { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    // Submit Form event
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(form)
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