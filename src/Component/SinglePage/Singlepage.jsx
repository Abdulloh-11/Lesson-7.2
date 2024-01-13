import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Singlepage() {

    const [rating, setRating] = useState({})
    const [singleproduct, setSingleprPoduct] = useState([]);
    const id = +window.location.href.split("/")[4]


    useEffect(() => {
        // fetchData();
        fetch(
            `https://fakestoreapi.com/products/${id}`
        ).then(async (response) => {
            const link = response.headers.get("link"); // link to next page (REST)
            const json = await response.json(); // data payload
            console.log(json)
            setSingleprPoduct(json);
            setRating({ ...json.rating })
        });
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4">SingleProduct</h1>
            <div className="card single_card shadow p-3 mb-5 bg-body rounded" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={singleproduct.image} className=" single_image img-fluid rounded-start" alt={singleproduct.id} />
                    </div>
                    <div className="col-md-8 single_text">
                        <div className="card-body">
                            <h5 className="card-title">{singleproduct.title}</h5>
                            <p className="card-text fw-bolder text-danger">${singleproduct.price}</p>
                            <p class="card-text fw-bolder text-info">⭐️{rating.rate}</p>
                            <p className='card-text text-primary'>Count:  <span className='fw-bold text-dark'>{rating.count}</span></p>
                            <p className="card-text fw-bold">Product Description</p>
                            <hr />
                            <p className="card-text">{singleproduct.description}</p>

                            <Link className='btn btn-info' to={`/product`}>Go Back</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
