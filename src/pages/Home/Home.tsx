
import styles from './Home.module.css'
import DesktopSpeaker from '../../assets/desktop/image-speaker-zx9.png'
import MobileSpeaker from '../../assets/mobile/image-speaker-zx9.png'
import earphoneImage from '../../assets/desktop/image-earphones-yx1.jpg'
import AudioGear from '../../sections/AudioGear'
import Categories from '../../sections/Categories'
import { Link } from 'react-router-dom'
export default function Home() { 
    return (       
        <div className='flex flex-col gap-20'>
            {/* header content with hero image */}
            <header className={`${styles.home}  font-primary`}>
                <div className='lg:w-2/3 mx-auto flex flex-col gap-7 max-lg:items-center max-lg:text-center overflow-hidden'>
                    <p className='overline-custom text-gray-400'>NEW PRODUCT</p>
                    <h1 className='h1-custom text-white'>
                        XX99 Mark II
                        <br />
                        Headphones
                    </h1>
                    <p className='text-body text-white md:w-md'>
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Link to= '/products/4' className='btn-1 w-fit tracking-widest' type="button" >
                        SEE PRODUCT
                    </Link>
                </div>
            </header>
            {/* categories section */} 
            <Categories/>
            {/* zx9 speaker section */}
            <section className=" relative w-full font-primary bg-primary overflow-hidden max-container pt-20 rounded-xl flex justify-center">
                    {/* Background Layer */}
                    <div className={`absolute w-5/8 max-md:w-full inset-0 ${styles.speaker1}`}></div>
                {/* Wrapper Layer */}
                <div className="flex flex-col gap-5 lg:flex-row justify-center items-center w-full">

                    {/* Speaker Image */}
                    <div className="w-5/8 flex justify-center items-center overflow-hidden relative z-20 ">
                        <img src={DesktopSpeaker} alt="speaker desktop image" className="-mb-3 max-lg:hidden" width={410} height={493} />
                        <img src={MobileSpeaker} alt="speaker desktop image" className="-mb-3 lg:hidden" width={197} height={237} />
                    </div>

                    {/* Text Content */}
                    <div className="w-3/7 relative z-30 text-white flex flex-col justify-center max-lg:text-center max-lg:items-center max-md:pb-20 gap-6">
                        <h1 className="h1-custom">
                            ZX9
                            <br />
                            SPEAKER
                        </h1>
                        <p className="text-body">
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>
                        <Link to="/products/6" type="button" className='w-fit max-sm:w-[200px] btn-4'>
                            <p className="text-body tracking-widest">SEE PRODUCT</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* zx7 speaker */}
            <section className={`font-primary h-[45vh]`}>
                    <div className={` ${styles.speaker2} max-container rounded-2xl`}>
                    <div className='lg:w-2/3 lg:mx-auto flex flex-col gap-7 max-lg:items-center max-lg:text-center overflow-hidden'>
                        <h2 className='h2-custom'>
                            ZX7 SPEAKER
                        </h2>
                        <Link to={'/products/5'} type="button" className='btn-2 w-fit '>
                            <p className="text-body tracking-widest">SEE PRODUCT</p>
                        </Link>
                    </div>
                    </div>
            </section>
            {/* yx1 earphone */}
            <section className="flex justify-center w-full max-container">
                <div className="flex flex-col md:flex-row w-full gap-6">
                    {/* Left Side - Image */}
                    <div className="w-full md:w-1/2">
                        <img src={earphoneImage} alt="YX1 Earphones" className="w-full h-full object-cover rounded-lg" />
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-1/2 bg-secondary rounded-lg flex flex-col justify-center items-center md:items-start h-full p-8 lg:p-40  ">
                        <h3 className="h3-custom">YX1 EARPHONES</h3>
                        <Link to={'/products/1'} className="btn-2 mt-4">
                        SEE PRODUCT
                        </Link>
                    </div>
                </div>
            </section>

        {/* person section */}
            <AudioGear/>

        </div>
    )
}