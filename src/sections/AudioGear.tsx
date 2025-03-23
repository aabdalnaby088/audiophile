import person from '../assets/shared/image-best-gear.jpg'

export default function AudioGear() {
    return (
        <section className='flex justify-center max-container w-full'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 '>
                    <div className='flex flex-col justify-center  w-1/2 gap-6 max-lg:text-center max-md:w-full' >
                        <h3 className='h3-custom  '>
                            Bringing you the <br /> <span className='text-primary'>best</span> audio gear
                        </h3>
                        <p className='text-body text-gray-500 lg:w-lg max-lg:w-fit '>
                            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                        </p>
                    </div>
                    <div className='w-1/2 max-md:w-full flex justify-end'>
                        <img src= {person} alt="person" className='rounded-xl ' />
                    </div>
                </div>

        </section>
    )
}
