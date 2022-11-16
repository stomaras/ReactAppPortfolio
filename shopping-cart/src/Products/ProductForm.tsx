import React from "react";

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return (
    <>
      <h2>Add Game to the store</h2>
      <form>
        <input type="text" placeholder="Game Title" name="title" />
        <input type="number" placeholder="Price" name="price" />
        <input type="text" placeholder="Id" name="id" />
        <button>Add Price</button>
      </form>
    </>
  );
};

export default ProductForm;
