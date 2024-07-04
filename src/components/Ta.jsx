import React from 'react';

const Table = ({ products, editProduct, deleteProduct }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Fecha</th>
          <th className="py-2 px-4 border-b">Categoría</th>
          <th className="py-2 px-4 border-b">Producto</th>
          <th className="py-2 px-4 border-b">Cantidad</th>
          <th className="py-2 px-4 border-b">Precio Unitario</th>
          <th className="py-2 px-4 border-b">Total</th>
          <th className="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{new Date(product.date).toLocaleDateString()}</td>
            <td className="py-2 px-4 border-b">{product.category}</td>
            <td className="py-2 px-4 border-b">{product.product}</td>
            <td className="py-2 px-4 border-b">{product.quantity}</td>
            <td className="py-2 px-4 border-b">${product.price}</td>
            <td className="py-2 px-4 border-b">${product.price * product.quantity}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => editProduct(product)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => deleteProduct(product)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
