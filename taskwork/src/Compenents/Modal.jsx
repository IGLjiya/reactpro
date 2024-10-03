import React from 'react';
import { FaXmark } from 'react-icons/fa6'

const Modal = ({ selectedProduct, setSelectedProduct }) => {
    return (
        <div className='position-fixed px-5 top-0 start-0  w-100 h-100 bg-light'>
            <FaXmark className='position-absolute top-0 end-0' onClick={() => setSelectedProduct(null)} />
            <div className='w-50'>
                <div className='d-flex justify-content-start'>
                    <img src={selectedProduct.images[0]} alt={selectedProduct.title} style={{ width: "500px" }} />

                </div>
                <div>
                    <h5 className='text-start'>{selectedProduct.title}</h5>
                    <p><b>Descrp:-</b>{selectedProduct.description}</p>
                </div>
            </div>

        </div>
    );
}

export default Modal;
