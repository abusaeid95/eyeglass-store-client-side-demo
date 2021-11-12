import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [addProduct, setAddproduct] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...addProduct };
    newProductData[field] = value;
    setAddproduct(newProductData);
  };
  const handleaddproductSubmit = (e) => {
    const product = { ...addProduct };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Added Succesfully");
        }
        e.preventDefault();
      });
    
  };

  return (
    <div>
      <div className="addproduct-main">
        <h1>Add Product</h1>
        <form onSubmit={handleaddproductSubmit}>
          <div className="addproduct-row">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onBlur={handleOnBlur}
              autocomplete="off"
            />
          </div>
          <div className="addproduct-row">
            <label for="image">Image</label>
            <input
              type="text"
              name="img"
              placeholder="Product Image"
              onBlur={handleOnBlur}
              autocomplete="off"
            />
          </div>
          <div className="addproduct-row">
            <label for="category">Category</label>
            <input
              type="text"
              list="category"
              name="category"
              onBlur={handleOnBlur}
              autocomplete="off"
            />
            <datalist id="category">
              <option>Man</option>
              <option>Woman</option>
              <option>Kids</option>
            </datalist>
          </div>
          <div className="addproduct-row">
            <label for="price">Price</label>
            <input
              type="number"
              placeholder="Product Price"
              name="price"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="addproduct-row">
            <label for="description">Description</label>
            <textarea
              placeholder="Product Description"
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="addproductbtn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
