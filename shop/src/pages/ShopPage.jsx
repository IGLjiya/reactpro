import React, { Fragment, useContext, useState } from 'react';
import NavBar from '../Components/NavBar';
import { products } from '../Constents/Products';
import ProductList from '../Components/ProductList';
import Modal from '../Components/Modal';
import { cartContext } from '../App';

const ShopPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)

    const { cartList } = useContext(cartContext)

    return (
        <Fragment>
            <NavBar />
            <div className='d-flex flex-wrap gap-3 pb-5'>
                {
                    products.map((product) => {
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
          
            <div className='pt-5'>
                <h1 className='text-center'>Cart</h1>
                <div className="d-flex mt-3 flex-wrap gap-3">
                    {
                        cartList.map((product) => {
                            return <ProductList
                                product={product}
                                key={product.id}
                                cart={true}
                            />
                        })
                    }
                </div>
            </div>
           
        </Fragment>
    );
}

export default ShopPage;
