import React, { Fragment, useContext, useEffect, useState } from 'react';
import { CgShoppingCart } from 'react-icons/cg'
import { PageContext } from '../Provider/AllProvider';
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Pagination = () => {

    const { product, setProducts } = useContext(PageContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(-1)
    const [searchItem ,setSearchItem] =useState("")

    useEffect(() => {

        const getProducts = async () => {
            try {
                const limit = 12
                const skip = (currentPage - 1) * limit
                const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                const result = await response.json()
                const filteredData = result.products.filter((product)=>product.title.toLowerCase().includes(searchItem.toLowerCase()))
                setProducts(filteredData)
                if (totalPage == -1) {
                    const Pages = Math.ceil(result.total / limit)
                    setTotalPage(Pages)
                }

            } catch (error) {
                console.log(error.message);
                return toast.error("Error Happend")
            }
        }
        getProducts()
        // console.log(product);

    }, [currentPage, searchItem])


    return (
        <Fragment >
            <div className='pt-2'>
                <div className='d-flex justify-content-center'>
                    <div className='position-relative w-50'>
                        <input type="text" onChange={(event)=>setSearchItem(event.target.value)} value={searchItem} placeholder='Search Product...' className='w-100 rounded border-1 p-2' />
                        <FaSearch className='position-absolute top-50 end-0 translate-middle'/>
                    </div>
                </div>
                <hr />
            </div>
            <div className='d-flex flex-wrap gap-3 p-3 justify-content-center'>
                {
                    product.map(item => {
                        return <div key={item.id} className='p-2 text-truncate border-success border' style={{ width: "15rem" }}>
                            <div>
                                <img src={item.images[0]} alt={item.title} style={{ width: "15rem", aspectRatio: 1 / 1, objectFit: "contain" }} />
                            </div>
                            <h6 className='text-center'><Link to={`single-view/${item.id}`}>{item.title}</Link></h6>
                            <p>{item.description}</p>
                            <button className='w-100 mt-2 btn btn-outline-success p-1'><CgShoppingCart /> Add To Cart</button>
                        </div>
                    })
                }
            </div>
            <div className='d-flex justify-content-center gap-2 mt-5 mb-5'>
                {
                    totalPage > -1 && new Array(totalPage).fill(0).map((_, index) => index + 1).map(item => {
                        return <button onClick={() => setCurrentPage(item)} className='rounded-circle border-0 text-light bg-opacity-90 bg-dark shadow ' key={item} style={{ width: "40px", height: "40px" }}>{item}</button>
                    })
                }
            </div>
        </Fragment>
    );
}

export default Pagination;
