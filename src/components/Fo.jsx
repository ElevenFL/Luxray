import React, { useState, useEffect } from 'react';

const Form = ({ addProduct, editProduct, productToEdit }) => {
  const [formData, setFormData] = useState({
    category: '',
    product: '',
    quantity: '',
    price: '',
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      editProduct(formData);
    } else {
      addProduct(formData);
    }
    setFormData({
      category: '',
      product: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Seleccione una categoría</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Comestibles">Comestibles</option>
          <option value="Descartables">Descartables</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Panaderia">Panaderia</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Producto</label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Cantidad</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Precio Unitario $</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-black p-2 rounded"
      >
        {productToEdit ? 'Aceptar' : 'Agregar'}
      </button>
    </form>
  );
};

export default Form;