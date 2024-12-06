
import { useState } from "react";
import { Input } from "../../../components/form/Input";
import { maxLength, required, validateField, validateForm } from "../../../utils/validators";
// Form's initial Value
const initialValue = {
  name: "",
};

// Form's validation Rules
const rules = {
  // Name
  name: [
    {
      rule : (v) => required(v),
      message: "Le nom est obligatoire"
    },{
      rule: (v) => maxLength(v, 30),
      message: "Le nom ne doit pas dépasser 30 caractères"
    }
  ]
}


export const EditForm = ({defaultValue=initialValue, onSubmit}) => {
    const [form, setForm] = useState(defaultValue);
    const isFormValid = validateForm(form, rules); // validate form.
  
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
          validate={validateField(form.name, rules.name)}
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          label="Name"
        />
        <input
          type="submit"
          value="Edit"
          className="btn btn-primary"
          disabled={!isFormValid}
        />
      </form>
    );
  };