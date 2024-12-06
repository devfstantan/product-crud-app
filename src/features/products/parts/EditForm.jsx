
import { useState } from "react";
import { Input } from "../../../components/form/Input";
import { maxLength, min, required, validateField, validateForm } from "../../../utils/validators";
import { Select } from "../../../components/form/Select";

const initialValue = {
  title: "",
  price:"",
  quantity:"",
  categorieId:""
};

// Form's validation Rules
const rules = {
  // title
  title: [
    {
      rule : (v) => required(v),
      message: "Le titre est obligatoire"
    },{
      rule: (v) => maxLength(v, 30),
      message: "Le titre ne doit pas dépasser 30 caractères"
    }
  ],
  // price
  price: [
    {
      rule : (v) => required(v),
      message: "Le prix est obligatoire"
    },{
      rule: (v) => min(v, 0),
      message: "Le prix doit être un nombre positif"
    }
  ],
  // quantity
  quantity: [
    {
      rule : (v) => required(v),
      message: "La quantité est obligatoire"
    },{
      rule: (v) => min(v, 0),
      message: "La quantité doit être un nombre positif"
    }
  ],
  categorieId: [
    {
      rule : (v) => required(v),
      message: "La catégorie est obligatoire"
    }
  ],
}

export const EditForm = ({defaultValue=initialValue, categories=[], onSubmit}) => {
  const [form, setForm] = useState(defaultValue);
  const isFormValid = validateForm(form, rules); // validate form.

  // categories select options
  const selectOptions = categories.map(c => (
    {value:c.id, label:c.name}
  ))

  // Form input change event
  const handleChange = (e) => {
    let { name, value,type } = e.target;
    if(type === 'number' && value.length > 0){
      value = Number(value)
    }
    setForm({ ...form, [name]: value });
  };

  // Submit Form event
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form)
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <Input
        value={form.title}
        validate={ validateField(form.title, rules.title)}
        onChange={handleChange}
        id="title"
        name="title"
        type="text"
        label="Title"
      />
      {/* Price */}
      <Input
        value={form.price}
        validate={ validateField(form.price, rules.price)}
        onChange={handleChange}
        id="price"
        name="price"
        type="number"
        label="Price"
      />
      {/* Quantity */}
      <Input
        value={form.quantity}
        validate={ validateField(form.quantity, rules.quantity)}
        onChange={handleChange}
        id="quantity"
        name="quantity"
        type="number"
        label="Stock"
      />
      {/* Category */}
      <Select
        value={form.categorieId}
        validate={ validateField(form.categorieId, rules.categorieId)}
        onChange={handleChange}
        id="categorieId"
        name="categorieId"
        label="Category"
        emptyOption="Choose Category"
        options={selectOptions}
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