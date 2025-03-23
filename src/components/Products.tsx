import { Link } from "react-router-dom"
import { Product } from "../constants"

type ProductsProps = {
    product: Product,
    index: number,

}

export default function Products({product, index}: ProductsProps) {
    return (
        <div key={index} className={`flex flex-col gap-10 md:flex-row justify-between items-center font-primary ${index%2 == 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-1/2 max-md:w-full">
                        <img src={product.images} alt={product.name} className="w-full h-full rounded-xl" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-10 lg:max-w-lg max-md:w-full max-md:text-center max-md:items-center">
                    { index == 0 && <p className="overline-custom text-primary">NEW PRODUCT</p>}
                    <h2 className="h2-custom text-black">{product.name}</h2>
                    <p className="text-body text-gray-500">{product.description}</p>
                    <Link to={`/products/${product.id}`} type="button" className="btn-1 w-fit text-sm">
                        SEE PRODUCT
                    </Link>
                    </div>
                </div>
    )
}
