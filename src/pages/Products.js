import { useContext, useEffect, useState } from "react"
import "./Products.css"
import toast, { Toaster } from 'react-hot-toast';
import { Context } from "../Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Products() {
    const { addProduct } = useContext(Context)

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (

        <div className="container-xl mt-5 " >
            <h2><b>Featured Products</b> </h2>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div id="myCarousel" className="carousel">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-2 mt-3" key={product.id}>
                            <div className="thumb-wrapper ">
                                <div className="img-box" id='innerbox'>
                                    <img src={product.image} className="img-fluid" alt="" width={80} />
                                </div>
                                <div className="thumb-content text-center">
                                    <div id='name' className='mt-4'>
                                        <h6>{product.title.length > 27 ? product.title.substring(0, 27) + "..." : product.title}</h6>
                                    </div>

                                    <div className="star-rating">
                                        <p>{product.rating.rate} <FontAwesomeIcon icon={faStar} color='#DCCF1B' className='size' />    </p>
                                        <p>{product.rating.count} ratings <FontAwesomeIcon icon={faUser} color='grey' className='size' /> </p>
                                    </div>
                                    <p className="item-price"><strike>${product.price + 100}</strike> <b>${product.price}</b></p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary mybtn" onClick={() => {
                                            addProduct(product);
                                            toast("Item added to cart!");
                                        }
                                        }>Add to Cart</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}