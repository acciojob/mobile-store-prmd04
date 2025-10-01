import { useState } from "react";
import React from "react";

export const AdminPanel = ({ products, setProducts }) => {
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };
  const saveEdit = (id) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...editData } : p)));
    setEditingId(null); // close the edit form
  };

  const startEditing = (product) => {
    setEditingId(product.id);
    setEditData({
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    });
  };
  const addProduct = () => {
    const id = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    setProducts([...products, { id, ...newProduct }]);

    setNewProduct({ title: "", price: "", description: "", image: "" });
  };

  return (
    <>
      <button id="addProduct" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Close Form" : "Add Product"}
      </button>
      {showAddForm && (
        <div className="add-product-form">
          <input
            type="text"
            placeholder="Title"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button onClick={addProduct}>Add Product</button>
        </div>
      )}

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="admin-product item-list">
            {editingId === product.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editData.price}
                  onChange={(e) =>
                    setEditData({ ...editData, price: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editData.image}
                  onChange={(e) =>
                    setEditData({ ...editData, image: e.target.value })
                  }
                />
                <button onClick={() => saveEdit(product.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={() => startEditing(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
