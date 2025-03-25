import { useParams } from "react-router-dom"
import {  products } from "../constants"
import { useNavigate } from 'react-router-dom';
import QuantityBtn from "../components/QuantityBtn";
import ProductCard from "../components/ProductCard";
import Categories from "../sections/Categories";
import AudioGear from "../sections/AudioGear";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, decreaseItemQuantity, removeItemFromCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";
export default function ProductDetails() {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    let {id} = useParams(); 
    const cart = useSelector((state: RootState) => state.cart ); 
    const product = products[Number(id) - 1]
    if (!product) {
        return (
            <div>Product not found</div>
        )
    }
    
    const cartItem = cart.items.find((item) => item.product.id === product.id);
    const isInCart = Boolean(cartItem);
    
    function handleAddtoCart(){
        dispatch(addItemToCart(product))
    }

const handleDecreaseQuantity = () => {
        dispatch(decreaseItemQuantity(product));
    };

    function handleRemoveFromCart(){
        dispatch(removeItemFromCart(product))
    }

    function handleGoBack() {
        navigate(-1);
    }
    
    
    
    return (
        <main className="max-container ] flex flex-col gap-30 mt-10">
            <button type="button" className="text-gray-500 subtitle-custom text-start cursor-pointer mt-5" onClick={handleGoBack}>
                Go Back
            </button>
            {/* main image & product description */}
            <section className="flex flex-col md:flex-row gap-20 md:gap-30 items-center justify-between max-md:justify-center">
                <div className=" w-1/2 max-md:w-full">
                    <img src= {product.image} alt= {`${product.name} image`} className="rounded-xl w-full" />
                </div>
                <div className="w-1/2 max-md:w-full flex flex-col gap-7 max-md:items-center max-md:text-center">
                { product.new  && <p className="overline-custom text-primary">NEW PRODUCT</p>}
                    <h1 className="h1-custom  ">{product.name}</h1>
                    <p className="text-body text-gray-500 lg:w-lg">{product.description}</p>
                    <p className="h6-custom">{product?.price?.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                    <div className="flex gap-5">
                        {
                            isInCart ? 
                            <>
                            <QuantityBtn product={product} decFn= {handleDecreaseQuantity} incFn={handleAddtoCart} />
                            <button type="button" className="btn-1 w-fit font-primary"  onClick={handleRemoveFromCart} >REMOVE FROM CART</button>
                            </>
                            : <button type="button" className="btn-1 w-fit font-primary"  onClick={handleAddtoCart} >ADD TO CART</button>
                        }
                    
                    </div>
                </div>
            </section>
            {/* Features and includes */}
            <section className="flex flex-col gap-20 items-center justify-between md:flex-row md:gap-30">
                <div className="w-1/2 max-md:w-full flex flex-col gap-7 max-md:items-center max-md:text-center ">
                <h4 className="h4-custom">Features</h4>
                <p className="text-gray-500 text-body">
                    {product.features}
                </p>
                </div>
                <div className="w-1/2 max-md:w-full flex flex-col gap-7 max-md:items-center max-md:text-center">
                <h4 className="h4-custom">In the Box</h4>
                <ul className="">
                    {product.includes.map((item, index) => (
                        <li key={index} className="text-gray-500 text-body flex gap-2">
                            <span className="text-primary subtitle-custom">{item.quantity}x</span> {item.item}
                        </li>
                    ))}
                </ul>
                </div>
            </section>
            {/* Gallery */}
            <section className="flex flex-col items-center gap-10 justify-center  md:flex-row ">
                <div className="flex flex-col  max-md:w-full gap-7 b">
                <img src= {product.gallery.first.desktop} alt="gallery first image " className="rounded-xl w-[445px] h-[280px] max-md:hidden" />
                <img src= {product.gallery.second.desktop} alt="gallery second image " className="rounded-xl w-[445px] h-[280px] max-md:hidden" />
                <img src= {product.gallery.first.mobile} alt="gallery first image " className="rounded-xl  md:hidden" />
                <img src= {product.gallery.second.mobile} alt="gallery second image " className="rounded-xl  md:hidden" />
                </div>
                <div className="max-md:w-full">
                    <img src= {product.gallery.third.desktop} alt="gallery third image " className="rounded-xl w-[635px] h-[592px] max-md:hidden"/>
                    <img src= {product.gallery.third.mobile} alt="gallery third image " className="rounded-xl md:hidden"/>
                </div>
            </section>
            {/* you may also like */}
            <section className="flex flex-col items-center justify-center gap-10 ">
                <h3 className="h3-custom text-center">You May Also Like</h3>
                <div className="flex flex-col gap-14 md:gap-8 md:flex-row ">
                {
                    product.others.map((item, index) => (
                        <ProductCard key={index} product={item} index={index} />
                    ))
                }
                </div>
            </section>
            {/* categories */}
            <Categories/>
            {/* audio gear */}
            <AudioGear/>
        </main>
    )
}
