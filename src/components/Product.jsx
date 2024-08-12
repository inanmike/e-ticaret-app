import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id, price, images, title, description} = product;
    console.log(product);

    const navigate = useNavigate();


  return (
    <div id='card' className='card'>
        <img className='image' src={images[0]} alt={title} />
        <div>
          <h6 style={{textAlign:'center', height:'15px'}}>{title}</h6>
          <h4 style={{marginLeft:'8px'}}>Fiyat: {price}</h4>
        </div>
        <div>
          <button 
          className='card-button' 
          style={{marginLeft:'8px'}}
          onClick={() => navigate("/product-details/" + id)}
          >Ürüne Git</button>
        </div>
    </div>
  )
}

export default Product