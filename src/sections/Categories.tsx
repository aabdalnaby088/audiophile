import CategoryCard from "../components/categoryCard/CategoryCard";
import { categories } from "../constants";

export default function Categories() {
    return (
        <section className="flex flex-col justify-center items-center mt-16 ">
                <div className="flex flex-wrap justify-between max-lg:justify-center max-container w-full gap-6 lg:flex-row max-lg:gap-20  ">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} item={category} />
                    ))}
                </div>
            </section>
    )
}
