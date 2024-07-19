'use client';
import styles from './productList.module.css';
import { useEffect, useState } from "react";
const API = "https://fakestoreapi.com/products";
const ProductList = () => {
    const [product, setProduct] = useState([])

    const fetchUser = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setProduct(data);
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUser(API);
    }, [])
    return (
        <div className={styles.List}>
            {product.map((product) => (
                <div key={product.id} className={styles.card} >
                    <img src={product.image} alt={product.title} className={styles.image} />
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>

    );

};



export default ProductList;
