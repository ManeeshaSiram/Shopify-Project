import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const EditPage = () => {
  const [product, setProduct] = useState(null); // Start with null to indicate no data yet
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]); // Add id as a dependency to refetch if id changes

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Error fetching product data');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!product.product || !product.company || !product.price || !product.description) {
      setError('Please provide all the required fields');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/products/${id}`, product, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  if (!product) {
    // Display a loading message until the product data is fetched
    return (
      <>
        <Navbar />
        <div className='loading'>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='newproduct'>
        <h3>Edit Product</h3>
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form className='form-section' onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input type="text" name="id" value={product.id} onChange={handleChange} disabled />
        </div>
        <div>
          <label>Product</label>
          <input type="text" name="product" value={product.product} onChange={handleChange} />
        </div>
        <div>
          <label>Company</label>
          <input type="text" name="company" value={product.company} onChange={handleChange} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label>Category</label>
          <select name="category" value={product.category} onChange={handleChange}>
            <option value="others">Others</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} rows='3' cols='20'></textarea>
        </div>
        <div>
          <button type="submit" className='btn'>Save</button>
          <Link to='/admin'>
            <button className='btn'>Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default EditPage;
