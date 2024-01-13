import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";




export default function Products({ panigation }) {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, [panigation]);
    const fetchData = () => {
        fetch(
            `https://fakestoreapi.com/products`
        ).then(async (response) => {
            const link = response.headers.get("link"); // link to next page (REST)
            const json = await response.json(); // data payload

            setproduct(json);
        });
    };


    return (
        <div className="container">
            <h1 className="text-center my-4">Product</h1>
            <div className="col-12 d-flex gap-4 flex-wrap">

                {product.map((item, index) => {
                    return (
                        <div key={index} className="card card_box shadow p-3 mb-5 bg-body rounded" >
                            <img className="img" src={item.image} alt={item.id} />
                            <div className="card-body">
                                <p className="card-text">{item.title}</p>
                                <Link className='btn btn-info' to={`/home/${item.id}`}>Go somewhere</Link>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}





