import styles from './Navbar.module.css'
import { IoCartOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layer from '../Layer';
import Menu from '../menu/Menu';
import useOutSideClick from '../../hooks/useOutsideClick'
import { useLocation } from 'react-router-dom';
import Cart from '../Cart';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);
    const location = useLocation();
    const isBlackBgPage = location?.pathname?.startsWith('/product') || location?.pathname?.startsWith('/checkout'); 
    
    function handleToggle() {
        setToggle(toggle => !toggle);
    }
    function handleToggleCart() {
        setToggleCart(toggle => !toggle);
    }

    function closeMenu(){
        setToggle(false)
        setToggleCart(false)
    }


    const {ref} = useOutSideClick(closeMenu)


    return (
            <div >
            <div className={`font-primary w-full ${isBlackBgPage || toggle ? 'bg-black' : 'bg-transparent absolute z-50'}`}>
                <nav className={`${styles.navbarStyle} py-8  max-container text-white uppercase tracking-[3px]`}>
                    <button type='button' onClick={handleToggle} className='text-2xl lg:hidden'>
                        <BsList />
                    </button>
                    <h1 className='font-bold text-3xl'>
                        <a href='/'>audiophile</a>
                    </h1>
                    <ul className={`${styles.navList}`}>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/headphones'>Headphones</NavLink></li>
                        <li><NavLink to='/speakers'>Speakers</NavLink></li>
                        <li><NavLink to='/earphones'>Earphones</NavLink></li>
                    </ul>
                    <p className='text-2xl'>
                        <button onClick={handleToggleCart}>
                        <IoCartOutline />
                        </button>
                    </p>
                </nav>
            </div>
            {
                toggle&& <Layer>
                <div ref={ref}>
                    <Menu />
                </div>
            </Layer>
            }
            {
                toggleCart && 
                    <Layer>
                    <div ref={ref}>
                    <Cart />
                    </div>
                    </Layer>

            }
        </div>
    )
}