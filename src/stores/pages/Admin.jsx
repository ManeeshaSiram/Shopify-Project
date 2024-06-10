import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Admin = () => {

  const [products,setProducts]=useState([])

  const fetchProducts=()=>{

    axios.get("http://localhost:5000/products")
    .then((response)=>{
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
    useEffect (()=>{
      fetchProducts()
    },[]) 


    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };

  return (
    <>
    <Navbar/>
    <div className='product-list'>
      <div className='top'>
      <h3>List Of Products</h3>
      <h4>Admin Page</h4>
      </div>
  
      <Link to='/newproduct'>
      <button className='btn'> Create </button>
      </Link>
      <button className='btn' onClick={()=> fetchProducts()}> Refresh </button>

      <table className='table'>
        <tr>
          <th>Id</th>
          <th>Product</th>
          <th>Company</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        <tbody>
          {
            products.map((product)=>{
              return(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.product}</td>
                <td>{product.company}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                <Link to={`/edit/${product.id}`}>
                    <button className='btn'>Edit</button>
                </Link>
               <button onClick={() => handleDelete(product.id)} 
               className='btn'> Delete</button>
                </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
     </div>
    </>
  )
}

export default Admin
