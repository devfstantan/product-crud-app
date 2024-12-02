
import { useState } from "react";
import { Input } from "../../../components/form/Input";
import { maxLength, required } from "../../../utils/validators";

 const intialValue = {
  name: "",
};

// Validation rules
 const rules = {
  name: (v) => required(v) && maxLength(v, 30),
}; 

export const CreateForm = ({category=intialValue, onSubmit}) => {
    const [form, setForm] = useState(category);
  
    const isFormValid = rules.name(form?.name)
  
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
          id="name"
          name="name"
          type="text"
          label="Name"
        />
        <input
          type="submit"
          value="Create"
          className="btn btn-primary"
          disabled={!isFormValid}
        />
      </form>
    );
  };