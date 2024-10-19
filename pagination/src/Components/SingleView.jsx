import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleView = () => {


    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [currentImage, setcurrentImage] = useState("")

    useEffect(() => {
        const getProducts = async () => {
            const resp = await fetch(`https://dummyjson.com/products/${id}`)
            const resu = await resp.json()
            setcurrentImage(resu.images[0])
            setProduct(resu)
        }
        getProducts()
    }, [id])

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-1 border flex flex-column'>
                        {
                            product?.images.map((image) => {
                                return <img key={image} src={image} onMouseEnter={() => setcurrentImage(image)} alt='image' width={100} height={100} />

                            })
                        }
                    </div>
                    <div className='col-4 border'>
                        <img src={currentImage} width={500} height={500} alt="" />
                    </div>
                    <div className="col-7 lh-sm border">

                        <div className='d-flex gap-3'>
                            <h2 className='text-start fw-bold'>{product?.title}</h2>
                            <p className='text-success fs-3'>({product?.discountPercentage.toFixed(0)}%)</p>
                        </div>
                        <hr className='bg-dark' style={{ height: "1px" }} />

                        <p><b>Descrp:- </b>{product?.description}</p>
                        <h3>Product Details:- </h3>
                        <div className='' style={{ lineHeight: "10px" }}>
                            <p><b>Category:- </b>{product?.category}</p>
                            <p><b>Price:- </b>${(product?.price - (product?.price * product?.discountPercentage / 100)).toFixed(2)}</p>
                            <p className='text-secondary ' style={{ fontSize: "12px" }} >M.R.P:- <del>{product?.price}</del></p>
                            <p><b>Rating:- </b>{product?.rating}</p>
                            <p><b>Stock:- </b>{product?.stock}</p>
                            <p><b>Tags:- </b>{product?.tags}</p>
                            <p><b>Brand:- </b>{product?.brand}</p>
                            <hr />
                            <h5>About this item</h5>
                            <p><b>Warranty :- </b> {product?.warrantyInformation}</p>
                            <p><b>Shipping:- </b>{product?.shippingInformation}</p>
                            <p><b>Stock Status:-</b>{product?.availabilityStatus}</p>
                            <hr />
                        </div>
                        <div>
                            <div><h3>Reviews</h3></div>
                            <div className='border text-dark p-4 lh-1 mb-3'>
                                <div className='d-flex gap-4'>
                                    <p><b>{product?.reviews[0].reviewerName}</b></p>
                                    {/* <StarRating rating={product?.reviews.rating} /> */}
                                </div>
                                <p className='px-5' >{product?.reviews[0].comment}</p>
                                <p>{product?.reviews[0].date.slice(0, 10)}</p>
                            </div>
                            <div className='border text-dark p-4 lh-1 mb-3'>
                                <div className='d-flex gap-4'>
                                    <p><b>{product?.reviews[1].reviewerName}</b></p>
                                    {/* <StarRating rating={product?.reviews.rating} /> */}
                                </div>
                                <p className='px-5' >{product?.reviews[1].comment}</p>
                                <p>{product?.reviews[1].date.slice(0, 10)}</p>

                            </div>
                            <div className='border text-dark p-4 lh-1 mb-3'>
                                <div className='d-flex gap-4'>
                                    <p><b>{product?.reviews[2].reviewerName}</b></p>
                                    {/* <StarRating rating={product?.reviews.rating} /> */}
                                </div>
                                <p className='px-5' >{product?.reviews[2].comment}</p>
                                <p>{product?.reviews[2].date.slice(0, 10)}</p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default SingleView;
