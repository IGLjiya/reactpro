import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Provider/ShopProvider';
import ListOfProduct from '../Componrnts/ListOfProduct';

const ShopPage = () => {

    const { data, setData, searchItem } = useContext(ShopContext)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const result = await response.json()
                const filteredData = result.products.filter((product)=> product.title.toLowerCase().includes(searchItem.toLowerCase()))
                setData(filteredData)


            } catch (error) {
                console.log(error.message);
            }
        }
        getProduct()

    }, [searchItem])

    return <>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
            {
                data.map((items) => {
                    return <ListOfProduct
                        items={items}
                        key={items.id}
                         />
                })
            }
        </div>

    </>
}

export default ShopPage;
