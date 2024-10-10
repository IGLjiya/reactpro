import React from 'react';
import { FaXmark } from 'react-icons/fa6'
import "../index.css"
import StarRating from './StarRating';

const Modal = ({ selectedProduct, setSelectedProduct }) => {
    
    

    return (
        <div className='position-fixed px-5 top-0 start-0  w-100 h-100 bg-light overflow-scroll'>
            <FaXmark className='position-absolute top-0 end-0' size={30} onClick={() => setSelectedProduct(null)} />
            <div className='w-100 d-flex'>
                <div className='d-flex justify-content-start border h-50'>
                    <img src={selectedProduct.images[0]} alt={selectedProduct.title} style={{ width: "50vh" }} />

                </div>
                <div className='p-5 lh-sm'>
                    <div className='d-flex gap-3'>
                        <h2 className='text-start fw-bold'>{selectedProduct.title}</h2>
                     <p className='text-success fs-3'>({selectedProduct.discountPercentage.toFixed(0)}%)</p> 
                    </div>
                    <hr className='bg-dark' style={{height:"1px"}}/>

                    <p><b>Descrp:- </b>{selectedProduct.description}</p>
                    <h3>Product Details:- </h3>
                    <div className='' style={{ lineHeight: "10px" }}>
                        <p><b>Category:- </b>{selectedProduct.category}</p>
                        <p><b>Price:- </b>${(selectedProduct.price - (selectedProduct.price * selectedProduct.discountPercentage / 100)).toFixed(2)}</p>
                        <p className='text-secondary ' style={{ fontSize: "12px" }} >M.R.P:- <del>{selectedProduct.price}</del></p>
                        <p><b>Rating:- </b>{selectedProduct.rating}</p>
                        <p><b>Stock:- </b>{selectedProduct.stock}</p>
                        <p><b>Tags:- </b>{selectedProduct.tags}</p>
                        <p><b>Brand:- </b>{selectedProduct.brand}</p>
                        <hr />
                        <h5>About this item</h5>
                        <p><b>Warranty :- </b> {selectedProduct.warrantyInformation}</p>
                        <p><b>Shipping:- </b>{selectedProduct.shippingInformation}</p>
                        <p><b>Stock Status:-</b>{selectedProduct.availabilityStatus}</p>
                        <hr />
                    </div>
                    <div>
                        <div><h3>Reviews</h3></div>
                        <div className='border text-dark p-4 lh-1 mb-3'>
                            <div className='d-flex gap-4'>
                            <p><b>{selectedProduct.reviews[0].reviewerName}</b></p>
                            <StarRating rating={selectedProduct.reviews.rating} />
                                </div> 
                            <p className='px-5' >{selectedProduct.reviews[0].comment}</p>
                            <p>{selectedProduct.reviews[0].date.slice(0,10)}</p>
                        </div>
                        <div className='border text-dark p-4 lh-1 mb-3'>
                        <div className='d-flex gap-4'>
                            <p><b>{selectedProduct.reviews[1].reviewerName}</b></p>
                            <StarRating rating={selectedProduct.reviews.rating} />
                                </div> 
                            <p className='px-5' >{selectedProduct.reviews[1].comment}</p>
                            <p>{selectedProduct.reviews[1].date.slice(0,10)}</p>

                        </div>
                        <div className='border text-dark p-4 lh-1 mb-3'>
                        <div className='d-flex gap-4'>
                            <p><b>{selectedProduct.reviews[2].reviewerName}</b></p>
                            <StarRating rating={selectedProduct.reviews.rating} />
                                </div> 
                            <p className='px-5' >{selectedProduct.reviews[2].comment}</p>
                            <p>{selectedProduct.reviews[2].date.slice(0,10)}</p>

                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Modal;
