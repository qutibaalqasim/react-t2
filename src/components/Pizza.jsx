import React, { useEffect, useState } from 'react'
import style from './Pizza.module.css'
export default function Pizza() {

    const [products, setProducts] = useState([]);
    const getProducts = async ()=>{
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const data = await response.json();
        setProducts(data.recipes);
    }

    useEffect(()=>{
        getProducts();
    },[]);
    
  return (
    <div>
        <div className='container'>
        <div className="row">
        {
            products.map((product)=>{
                return(
                    
                    <div className='card text-center col-lg-4 mt-2 mb-2'>
                        <div className='card-header'>
                        <h2 className='card-title'>{product.title.split(' ').slice(0,3).join(' ')}</h2>
                        </div>
                        <div className='card-body'>
                        <img src={product.image_url} className= {`${style.img}`}  />
                        </div>
                        <div className='card-footer'>
                            <p>{product.publisher}</p>
                        </div>
                    </div>
                    
                )
            })
        }
        </div>
        </div>
    </div>
  )
}
