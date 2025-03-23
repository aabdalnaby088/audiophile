import { Link } from "react-router-dom"

type product = {
    name: string,
    image: string,
    href: string
}

type productCardProps = {
    product: product
    index: number
}

export default function ProductCard({ product,index }: productCardProps) {
    return (
        <div key={index} className="flex flex-col gap-8 max-md:w-full max-md:text-center max-md:items-center ">
            <img src={product.image} alt={product.name} />
            <p className="h4-custom">{product.name}</p>
            <Link to={product.href} type="button" className="btn-1 w-fit">Show details</Link>
        </div>
    )
}
