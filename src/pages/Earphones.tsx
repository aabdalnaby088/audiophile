import { Link } from "react-router-dom";
import Products from "../components/Products";
import { earphones } from "../constants";
import AudioGear from "../sections/AudioGear";
import Categories from "../sections/Categories";
import CategoryHeader from "../sections/CategoryHeader";

export default function Earphones() {
    return (
        <>
        <CategoryHeader Header="earphones"/>
        <div className="max-container flex flex-col gap-30 max-md:gap-20">
        {/* products section */}
            {earphones.map((earphone, index) => (
                <Link to = '/products/1'>
                    <Products product={earphone} index={index} />
                </Link>
            ))}
            <Categories/>
            <AudioGear/>
        </div>

        </>
    )
}
