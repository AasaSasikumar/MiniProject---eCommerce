import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { productList, deleteProduct } from '../../../Services/AdminApi';
 import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductList() {
  const [Product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productList();
        console.log('API response:', response);
        const data = response.data;

        if (data.status && Array.isArray(data.productList)) {
          setProducts(data.productList);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching products:', error); 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  const handleEdit = (productId) => {
    navigate(`/admin/edit/${productId}`); 
  };
  
  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(Product.filter(product => product._id !== productId));
      toast.success('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  // const handleDisable = (productId) => {
  //   console.log('Disable product with ID:', productId);
  //   toast.info('Product disabled');
  // };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className='admin-product'>
      <h1 className='admin-product__title'>Product List</h1>
      
      <table className='product-list-table'>
        <thead>
          <tr>
            <th>Items</th>
            <th>Product</th>
            <th>Name</th>
            <th>Description</th>
            {/* { <th>Category</th> } */}
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          {Product.map((product, index) => (
            <tr key={product._id} className="product-list-row">
              <td>{index + 1}</td>
              <td><img src={product.image} alt={`product${index + 1}`} className="product-image" /></td>
              <td>{product.prod_name}</td>
              <td>{product.description}</td>
               {/* <td>{product.Category}</td>  */}
              <td>${product.price}</td>
              <td>
                <FaEdit className='icon icon--edit' onClick={() => handleEdit(product._id)} />
                <FaTrashAlt className='icon icon--delete' onClick={() => handleDelete(product._id)} />
                {/* <FaBan className='icon icon--disable' onClick={() => handleDisable(product._id)} /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
