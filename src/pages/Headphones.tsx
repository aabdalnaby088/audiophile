import Products from "../components/Products";
import { headphones } from "../constants";
import AudioGear from "../sections/AudioGear";
import Categories from "../sections/Categories";
import CategoryHeader from "../sections/CategoryHeader";

export default function Headphones() {
    return (
        <>
        <CategoryHeader Header="HEADPHONES"/>
        <div className="max-container flex flex-col gap-30 max-md:gap-20">
        {/* products section */}
            {headphones.map((headphone, index) => (
                <Products product={headphone} index={index} />
            ))}
            <Categories/>
            <AudioGear/>
        </div>

        </>
    )
}
