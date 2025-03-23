import SpeakerImg from '../assets/shared/image-category-thumbnail-speakers.png'
import earphoneImg from '../assets/shared/image-category-thumbnail-earphones.png'
import headPhoneImg from '../assets/shared/image-category-thumbnail-headphones.png'
import xx92Desktop from '../assets/desktop/image-xx99-mark-two-headphones.jpg'
import xx91Desktop from '../assets/desktop/image-xx99-mark-one-headphones.jpg'
import xx59Desktop from '../assets/desktop/image-xx59-headphones.jpg'
import zx9 from '../assets/desktop/image-zx9-speaker.jpg'
import zx7 from '../assets/desktop/image-zx7-speaker.jpg'
import yx1 from '../assets/desktop/image-category-page-preview.jpg'
import xx92ProductDesktop from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import xx92Gallery1desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import xx92Gallery2desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import xx92Gallery3desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import xx92Gallery1mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import xx92Gallery2mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import xx92Gallery3mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import yx1ProductDesktop from '../assets/product-yx1-earphones/desktop/image-product.jpg'
import yx1Gallery1desktop from '../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import yx1Gallery2desktop from '../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import yx1Gallery3desktop from '../assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
import yx1Gallery1mobile from '../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
import yx1Gallery2mobile from '../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
import yx1Gallery3mobile from '../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'
import xx59ProductDesktop from '../assets/product-xx59-headphones/desktop/image-product.jpg'
import xx59Gallery1desktop from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import xx59Gallery2desktop from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import xx59Gallery3desktop from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import xx59Gallery1mobile from '../assets/product-xx59-headphones/mobile/image-gallery-1.jpg'
import xx59Gallery2mobile from '../assets/product-xx59-headphones/mobile/image-gallery-2.jpg'
import xx59Gallery3mobile from '../assets/product-xx59-headphones/mobile/image-gallery-3.jpg'
import zx9ProductDesktop from '../assets/product-zx9-speaker/desktop/image-product.jpg'
import zx9Gallery1desktop from '../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import zx9Gallery2desktop from '../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import zx9Gallery3desktop from '../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
import zx9Gallery1mobile from '../assets/product-zx9-speaker/mobile/image-gallery-1.jpg'
import zx9Gallery2mobile from '../assets/product-zx9-speaker/mobile/image-gallery-2.jpg'
import zx9Gallery3mobile from '../assets/product-zx9-speaker/mobile/image-gallery-3.jpg'
import xx91ProductDesktop from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import xx91Gallery1desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import xx91Gallery2desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import xx91Gallery3desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import xx91Gallery1mobile from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import xx91Gallery2mobile from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import xx91Gallery3mobile from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
import zx7ProductDesktop from '../assets/product-zx7-speaker/desktop/image-product.jpg'
import zx7Gallery1desktop from '../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import zx7Gallery2desktop from '../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import zx7Gallery3desktop from '../assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
import zx7Gallery1mobile from '../assets/product-zx7-speaker/mobile/image-gallery-1.jpg'
import zx7Gallery2mobile from '../assets/product-zx7-speaker/mobile/image-gallery-2.jpg'
import zx7Gallery3mobile from '../assets/product-zx7-speaker/mobile/image-gallery-3.jpg'

interface ProductItem {
    id: number;
    slug: string;
    name: string;
    image: string;
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: {
            desktop: string;
            mobile: string;
        };
        second: {
            desktop: string;
            mobile: string;
        };
        third: {
            desktop: string;
            mobile: string;
        };
    };
    others: {
        slug: string;
        name: string;
        image: string;
        href:string
    }[];
}




export type Category = {
    id: number;
    name: string;
    image: string;
    href: string;
};

export type Product = {
    id: number;
    name: string;
    images: string
    description: string;
}

export const categories: Category[] = [
    {
        id: 1,
        name: 'SPEAKERS',
        image: SpeakerImg, 
        href: '/speakers'
    },
    {
        id: 2,
        name: 'HEADPHONES',
        image: headPhoneImg,
        href: '/headphones'
    },
    {
        id: 3,
        name: 'EARPHONES',
        image: earphoneImg,
        href: '/earphones'
    },
];

export const headphones : Product[] = [
    {
        id: 4,
        name: 'XX99 Mark II Headphones',
        images: xx92Desktop,

        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
    }, 
    {
        id: 3,
        name: 'XX99 Mark I Headphones',
        images: xx91Desktop,

        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
    },
    {
        id: 2,
        name: 'XX59 Headphones',
        images: xx59Desktop,
        description:'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
    }
]
export const speakers : Product[] = [
    {
        id: 6,
        name: 'ZX9 SPEAKER',
        images: zx9,
        description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
    }, 
    {
        id: 5,
        name: 'ZX7 SPEAKER',
        images: zx7,
        description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
    },
]

export const earphones : Product[] = [
    {
        id: 1,
        name: 'YX1 WIRELESS EARPHONES',
        images: yx1,
        description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
    }
]

export const products: ProductItem[] = [
    {
        "id": 1,
        "slug": "yx1-earphones",
        "name": "YX1 Wireless Earphones",
        "image": yx1ProductDesktop,
        "category": "earphones",
        "new": true,
        "price": 599,
        "description": "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        "features": "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        "includes": [
            { "quantity": 2, "item": "Earphone unit" },
            { "quantity": 6, "item": "Multi-size earplugs" },
            { "quantity": 1, "item": "User manual" },
            { "quantity": 1, "item": "USB-C charging cable" },
            { "quantity": 1, "item": "Travel pouch" }
        ],
        "gallery": {
            "first": {
                "desktop":yx1Gallery1desktop,
                "mobile": yx1Gallery1mobile
            },
            "second": {
                "desktop": yx1Gallery2desktop,
                "mobile": yx1Gallery2mobile
            },
            "third": {
                "desktop": yx1Gallery3desktop,
                "mobile": yx1Gallery3mobile
            }
        },
        "others": [
            { "slug": "xx99-mark-one-headphones", "name": "XX99 Mark I", "image": xx91Desktop , href:'/products/3'},
            { "slug": "xx59-headphones", "name": "XX59", "image": xx59Desktop , href:'/products/2'},
            { "slug": "zx9-speaker", "name": "ZX9 Speaker", "image": zx9 , href:'/products/6'}
        ]
    },
    {
        "id": 2,
        "slug": "xx59-headphones",
        "name": "XX59 Headphones",
        "image": xx59ProductDesktop,
        "category": "headphones",
        "new": false,
        "price": 899,
        "description": "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        "features": "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        "includes": [
            { "quantity": 1, "item": "Headphone unit" },
            { "quantity": 2, "item": "Replacement earcups" },
            { "quantity": 1, "item": "User manual" },
            { "quantity": 1, "item": "3.5mm 5m audio cable" }
        ],
        "gallery": {
            "first": {
                "desktop": xx59Gallery1desktop,
                "mobile": xx59Gallery1mobile
            },
            "second": {
                "desktop": xx59Gallery2desktop,
                "mobile": xx59Gallery2mobile
            },
            "third": {
                "desktop": xx59Gallery3desktop,
                "mobile": xx59Gallery3mobile
            }
        },
        "others": [
            { "slug": "xx99-mark-two-headphones", "name": "XX99 Mark II", "image": xx92Desktop , href:'/products/4'},
            { "slug": "xx99-mark-one-headphones", "name": "XX99 Mark I", "image": xx91Desktop , href:'/products/3'},
            { "slug": "zx9-speaker", "name": "ZX9 Speaker", "image": zx9 , href:'/products/6'}
        ]
    },
    {
        "id": 3,
        "slug": "xx99-mark-one-headphones",
        "name": "XX99 Mark I Headphones",
        "image": xx91ProductDesktop,
        "category": "headphones",
        "new": false,
        "price": 1750,
        "description": "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        "features": "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
        "includes": [
            { "quantity": 1, "item": "Headphone unit" },
            { "quantity": 2, "item": "Replacement earcups" },
            { "quantity": 1, "item": "User manual" },
            { "quantity": 1, "item": "3.5mm 5m audio cable" }
        ],
        "gallery": {
            "first": {
                "desktop": xx91Gallery1desktop,
                "mobile": xx91Gallery1mobile
            },
            "second": {
                "desktop": xx91Gallery2desktop,
                "mobile": xx91Gallery2mobile
            },
            "third": {
                "desktop": xx91Gallery3desktop,
                "mobile": xx91Gallery3mobile
            }
        },
        "others": [
            { "slug": "xx99-mark-two-headphones", "name": "XX99 Mark II", "image": xx92Desktop, href:'/products/4' },
            { "slug": "xx59-headphones", "name": "XX59", "image": xx59Desktop , href:'/products/2'},
            { "slug": "zx9-speaker", "name": "ZX9 Speaker", "image": zx9 , href:'/products/6'}
        ]
    },
    {
        "id": 4,
        "slug": "xx99-mark-two-headphones",
        "name": "XX99 Mark II Headphones",
        "image": xx92ProductDesktop,
        "category": "headphones",
        "new": true,
        "price": 2999,
        "description": "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        "features": "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        "includes": [
            { "quantity": 1, "item": "Headphone unit" },
            { "quantity": 2, "item": "Replacement earcups" },
            { "quantity": 1, "item": "User manual" },
            { "quantity": 1, "item": "3.5mm 5m audio cable" },
            { "quantity": 1, "item": "Travel bag" }
        ],
        "gallery": {
            "first": {
                "desktop": xx92Gallery1desktop,
                "mobile": xx92Gallery1mobile
            },
            "second": {
                "desktop": xx92Gallery2desktop,
                "mobile": xx92Gallery2mobile
            },
            "third": {
                "desktop": xx92Gallery3desktop,
                "mobile": xx92Gallery3mobile
            }
        },
        "others": [
            { "slug": "xx99-mark-one-headphones", "name": "XX99 Mark I", "image": xx91Desktop, href:'/products/3' }, 
            { "slug": "xx59-headphones", "name": "XX59", "image": xx59Desktop, href:'/products/2' }, 
            { "slug": "zx9-speaker", "name": "ZX9 Speaker", "image": zx9, href:'/products/6' } 
        ]
    },
    {
        "id": 5,
        "slug": "zx7-speaker",
        "name": "ZX7 Speaker",
        "image": zx7ProductDesktop,
        "category": "speakers",
        "new": false,
        "price": 3500,
        "description": "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        "features": "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        "includes": [
            { "quantity": 2, "item": "Speaker unit" },
            { "quantity": 2, "item": "Speaker cloth panel" },
            { "quantity": 1, "item": "User manual" },
            { "quantity": 1, "item": "3.5mm 7.5m audio cable" },
            { "quantity": 1, "item": "7.5m optical cable" }
        ],
        "gallery": {
            "first": {
                "desktop": zx7Gallery1desktop,
                "mobile": zx7Gallery1mobile
            },
            "second": {
                "desktop": zx7Gallery2desktop,
                "mobile": zx7Gallery2mobile
            },
            "third": {
                "desktop": zx7Gallery3desktop,
                "mobile": zx7Gallery3mobile
            }
        },
        "others": [
            { "slug": "zx9-speaker", "name": "ZX9 Speaker", "image": zx9, href:'/products/6' },
            { "slug": "xx99-mark-one-headphones", "name": "XX99 Mark I", "image": xx91Desktop, href:'/products/3' },
            { "slug": "xx59-headphones", "name": "XX59", "image": xx59Desktop, href:'/products/2' }
        ]
    },
    {
        "id": 6,
        "slug": "zx9-speaker",
        "name": "ZX9 Speaker",
        "image": zx9ProductDesktop,
        "category": "speakers",
        "new": true,
        "price": 4500,
        "description": "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        "features": "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        "includes": [
            { "quantity": 2, "item": "Speaker unit" },
            { "quantity": 2, "item": "Speaker cloth panel" },
            { "quantity": 1, "item": "User manual" },
            { "quantity": 1, "item": "3.5mm 10m audio cable" },
            { "quantity": 1, "item": "10m optical cable" }
        ],
        "gallery": {
            "first": {
                "desktop": zx9Gallery1desktop,
                "mobile": zx9Gallery1mobile
            },
            "second": {
                "desktop": zx9Gallery2desktop,
                "mobile": zx9Gallery2mobile
            },
            "third": {
                "desktop": zx9Gallery3desktop,
                "mobile": zx9Gallery3mobile
            }
        },
        "others": [
            { "slug": "zx7-speaker", "name": "ZX7 Speaker", "image": zx7, href:'/products/5' },
            { "slug": "xx99-mark-one-headphones", "name": "XX99 Mark I", "image": xx91Desktop, href:'/products/3' },
            { "slug": "xx59-headphones", "name": "XX59", "image": xx59Desktop, href:'/products/2' }
        ]
    }
];