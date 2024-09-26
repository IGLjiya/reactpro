import React, { Fragment, useState } from 'react';
import NavBar from '../Compenents/NavBar';
import { products } from '../Constent/Products';
import ProductList from '../Compenents/ProductList';
import Modal from '../Compenents/Modal';

const ShopPage = () => {
    const [selectedProduct, setSelectedProduct]=useState(null)

        return (
            <Fragment>
                <NavBar/>
                <div className='d-flex flex-wrap gap-3'>
                    {
                        products.map((product)=>{
                            return <ProductList 
                            product={product}
                            key={product.id}
                            setSelectedProduct={setSelectedProduct}
                            />
                        })
                    }
                </div>
                <div>
                    {
                        selectedProduct &&
                        <Modal
                         selectedProduct={selectedProduct}
                         setSelectedProduct={setSelectedProduct}
                         />
                    }
                </div>
            </Fragment>
        );
}

export default ShopPage;
