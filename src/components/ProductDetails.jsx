import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/Product.css';
import { MdOutlinePlusOne } from "react-icons/md";
import { TbExposureMinus1 } from "react-icons/tb";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';


function ProductDetails() {

    const {id} = useParams();
    const {products, selectedProduct} = useSelector((store) => store.product)
    const {price, image, title, description} = selectedProduct;

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const incremet = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count,
        }
        console.log("Sepete eklendi: ", selectedProduct);
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }

    useEffect(() =>{
        getProductById();
    },[])
    
    const getProductById = () =>{
        products && products.map((product) =>{
            if (product.id == id){
                dispatch(setSelectedProduct(product));
            }
        })
    }

  return (
    <div className='container'>
        <div className='row-pd-img'>
            <img src={image} alt={title} />
        </div>
        <div className='row-pd-desc'>
            <h2 style={{textAlign:"center"}}>{title}</h2>
            <p>
                {description}
            </p>
            <h3 style={{marginLeft:"10px"}}>Fiyat: {price}</h3>

            <div style={{display:"flex", textAlign:"center", fontSize:"32px", gap:"10px"}}>
                <TbExposureMinus1 onClick={decrement} style={{marginTop:"20px"}}/> 
                <span style={{color:"deeppink"}}>{count}</span>
                <MdOutlinePlusOne onClick={incremet} style={{marginTop:"20px"}}/>
            </div>

            <div style={{marginTop:"20px"}}>
                <button
                onClick={addBasket}
                className='card-button'>Sepete Ekle</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails