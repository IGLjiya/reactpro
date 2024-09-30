import React from 'react';
import { FaXmark } from 'react-icons/fa6'

const Modal = ({selectedProduct, setSelectedProduct}) => {
        return (
            <div className='position-fixed top-0 start-0  w-100 h-100 bg-light'>
                <FaXmark className='position-absolute top-0 end-0' onClick={()=> setSelectedProduct(null)}/>
                    <div className='d-flex justify-content-center'>
                        <img src={selectedProduct.images[0]} alt={selectedProduct.title} style={{width:"500px"}} />

                    </div>
                    <div>
                        <h5 className='text-center'>{selectedProduct.title}</h5>
                        <p><b>Descrp:-</b>{selectedProduct.description}</p>
                    </div>
                    
            </div>
        );
}

export default Modal;
