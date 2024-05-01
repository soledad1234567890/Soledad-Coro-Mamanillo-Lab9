import { useEffect, useState } from "react"

export const Card = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, []);

    return (
        <div>
            <p>{product.title}</p>
            <p>Descripcion: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    )
};