import Products from "../components/Products";
import { speakers } from "../constants";
import AudioGear from "../sections/AudioGear";
import Categories from "../sections/Categories";
import CategoryHeader from "../sections/CategoryHeader";

export default function Speakers() {
    return (
        <>
        <CategoryHeader Header="SPEAKERS"/>
        <div className="max-container flex flex-col gap-20">
        {/* products section */}
            {speakers.map((speaker, index) => (
                <Products product={speaker} index={index} />
            ))}
            <Categories/>
            <AudioGear/>
        </div>
        </>
    )
}
