import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

const NewProductPage = (props) => {
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    // create a product object from form data
    const product = {
      id: event.target.id.value,
      product: event.target.product.value,
      company: event.target.company.value,
      price: event.target.price.value,
      category: event.target.category.value,
      description: event.target.description.value
    }

    // form validation
    if (!product.product || !product.company || !product.price || !product.description) {
      setError('Please provide all the required fields')
      return;
    }

    try {
      await axios.post("http://localhost:5000/products", product, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <Navbar />
      <div className='newproduct'>
        <h3>Create New Product</h3>
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form className='form-section' onSubmit={handleSubmit}>
      <div>
          <label>ID </label>
          <input type="text" name="id" defaultValue='' />
        </div>
        <div>
          <label>Product</label>
          <input type="text" name="product" defaultValue='' />
        </div>
        <div>
          <label>Company</label>
          <input type="text" name="company" defaultValue='' />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" defaultValue='' />
        </div>
        <div>
          <label>Category</label>
          <select name="category" defaultValue=''>
            <option value="others">Others</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" defaultValue='' rows='3' cols='20'></textarea>
        </div>
        <div>
          <button type="submit" className='btn'>Save</button>
          <Link to='/admin'>
            <button className='btn'>Cancel</button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default NewProductPage
